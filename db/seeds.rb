# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shelter.create!(name: 'THE Shelter', address: '77 summer street', description: 'This is the very first shelter at Launch Academy!')
Shelter.create!(name: 'Last Hope K9 Rescue', address: '71 Commercial Street, Boston, MA 02109', description: 'Last Hope K9 Rescue (LHK9) is a 501(c)(3), 100% volunteer run, foster based, all breed rescue.')

User.create!(email: 'jctbog9@aol.com', password: '123456')
User.create!(email: '1234@shelter.com', password: '123456789', role: "shelter", shelter_id: 1)

Breed.seed

Dog.create!(name: 'Pencil', age: 4, story: 'This pup was rescued from a shelter and is really just loking for someone to love <3', breed_id: 1, shelter_id: 1)
Dog.create!(name: 'Dominic', age: 6, story: 'This boxer is a tough dude who will protect you from any and all danger. He will always try to make sure his family is safe', breed_id: 4, shelter_id: 1)
Dog.create!(name: 'Triks', age: 1, story: 'This trickster likes to play fetch and then sneak off to under the covers and hide so that he can play with the toy he just caught! Adopt him please!', breed_id: 6, shelter_id: 1)
Dog.create!(name: 'Astro', age: 58, story: 'Gets along well with george but sometimes gives Judy a hard time', breed_id: 9, shelter_id: 1)
Dog.create!(name: 'Scooby', age: 49, story: 'This pup may be a bit of a scaredy-cat at times but will be very loyal and loves his scooby-snacks!', breed_id: 5, shelter_id: 2)
Dog.create!(name: 'Brian', age: 69, story: 'Brian sucks most of the time but is kind of funny. He also died once', breed_id: 1, shelter_id: 1)

Favorite.create!(user_id: 1, dog_id: 2)
Favorite.create!(user_id: 1, dog_id: 1)
Favorite.create!(user_id: 1, dog_id: 4)
Favorite.create!(user_id: 1, dog_id: 6)
