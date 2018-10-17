# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Breed.create!(name: 'Beagle', description: 'This is a Beagle! It is so cute and lovable <3', img_url: 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock_000013918544_small.jpg?itok=LWmihUij&resize=1100x1100')
Breed.create!(name: 'Dachshund', description: 'This is a Dachshund! They are really short but super cute! They kind of look like weiner dogs', img_url: 'https://www.rover.com/blog/wp-content/uploads/2017/06/pepper-mini-dachshund-960x540.jpg')
Breed.create!(name: 'Boxer', description: 'This is a Boxer! They are totally badass and also extremely loyal. Would recommend adopting one!', img_url: 'https://cdn3-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-dogs-puppies-1.jpg')
