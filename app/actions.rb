# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  @contacts = Contact.all
  @contacts.to_json
end

post '/contacts' do
  @contact = Contact.new(params)
  @contact.save
end

get '/contacts/delete' do
  @contacts = Contact.all
  erb :delete
end

get '/contact/:id/delete' do
  contact = Contact.find(params[:id])
  contact.destroy
end
