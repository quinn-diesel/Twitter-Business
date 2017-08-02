# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "DB Seeding..."

###### USERS ######
User.destroy_all

u1 = User.create name: "Quinn", email: "quinn@gmail.com", password: "chicken"
u2 = User.create name: "Jerry", email: "jerry@day.com", password: "chicken"
u3 = User.create name: "Bill", email: "bill@murray.com", password: "chicken"


###### TWEET #####

Tweet.destroy_all

t1 = Tweet.create search_term: "Ruby", body: "This is the greatest language there is. I am so glad I learned it."
t2 = Tweet.create search_term: "Blockchain", body: "I cannot believe it is forking. It is going to ruin me."
t3 = Tweet.create search_term: "Trump", body: "Make America great again. LOL."


#### ASSOCIATINS ####

## USER to TWEETS ##

u1.tweets << t1 << t2 << t3

puts "You have created your garden go henceforth and ruby"
