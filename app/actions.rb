# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  @contacts = Contact.all
  @contacts.to_json
end

post '/contact/new' do
  contact = Contact.new(params)
  contact.save
end
