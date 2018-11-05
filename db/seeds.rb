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


Breed.create!(name: 'Beagle', description: 'This is a Beagle! It is so cute and lovable <3', img_url: 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock_000013918544_small.jpg?itok=LWmihUij&resize=1100x1100')
Breed.create!(name: 'Dachshund', description: 'This is a Dachshund! They are really short but super cute! They kind of look like weiner dogs', img_url: 'https://www.rover.com/blog/wp-content/uploads/2017/06/pepper-mini-dachshund-960x540.jpg')
Breed.create!(name: 'Alaskan Malamute', description: 'This malamute is a type of spitz with a strong loyalty to its master! Malamutes are immensely strong and heavy duty workers that are loyal, affectionate, and playful', img_url: 'https://vetstreet.brightspotcdn.com/dims4/default/877186f/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F6e%2F28%2Fd2835a0d40b6a599461307bbad6b%2Falaskan-malamute-ap-qlqcnq-645-x-380.jpg')
Breed.create!(name: 'Boxer', description: 'This is a Boxer! They are totally badass and also extremely loyal. Would recommend adopting one!', img_url: 'https://cdn3-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-dogs-puppies-1.jpg')
Breed.create!(name: 'Bernese Mountain Dog', description: 'Bernese Mountain Dogs are largely affectionate pups but also an incredibly strong and tough breed that works very hard. Bernese Mountain Dogs aren\'t the most playful of animals but live to pleaase their owners and if their owners want to play, they really bring their A-Game', img_url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000440/Bernese-Mountain-Dog-On-White-01.jpg')
Breed.create!(name: 'Cairn Terrier', description: 'Cairn Terriers are mini guard dogs when it comes to small animals you want to keep out of your homes. Tarins love to dig and explore and often times scare off tiny terrors', img_url: 'https://vetstreet.brightspotcdn.com/dims4/default/b0edf01/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F92%2Fb008b0a72a11e0a0d50050568d634f%2Ffile%2FCairn-Terrier-3-645mk062311.jpg')
Breed.create!(name: 'Cardigan Welsh Corgi', description: 'The Cardigan Corgi is suited to moving cattle, and yet it is so congenial and sweet-faced that it would be a cherished companion even if it never did a day’s work', img_url: 'https://vetstreet-brightspot.s3.amazonaws.com/39/d0c350a72b11e0a0d50050568d634f/file/Cardigan-Welsh-Corgi-5-645mk062311.jpg')
Breed.create!(name: 'Dalmation', description: 'Dalmations are muscular and built to go the distance. They are powerful, regal, and fiercely loyal. They were originally bred to accompany those in horse-carraige and have since been popularly seen accompanying firefighters on their missions.', img_url: 'https://vetstreet.brightspotcdn.com/dims4/default/e18d1a8/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8a%2F16%2F423e88754a008b2b8fa3703e6d9c%2FDalmatian-AP-1SW8RF-645sm101513.jpg')
Breed.create!(name: 'Finnish Spitz', description: 'The Finnish Spitz is a small but fearless hunting dog with a unique style of tracking and indicating quarry.', img_url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/01191430/Finnish.Spitz_.AdobeStock_72595490.jpg')
Breed.create!(name: 'French Bulldog', description: 'The French Bulldog is one of the world’s most popular small-dog breeds. The Frenchie is a playful, alert, and adaptable pup which makes them quite the catch for those living in areas without much access to open running areas.', img_url: 'https://frenchbulldogclub.org/wp-content/uploads/2014/01/slider6.jpg')

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
