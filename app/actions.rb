# Homepage (Root path)
get '/' do
  erb :index
end

post '/contact/new' do
  contact = Contact.new(params)
  contact.save
end
