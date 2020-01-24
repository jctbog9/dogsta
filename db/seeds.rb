require_relative 'dogs'

breeds = DogData::BREEDS

Shelter.create!(name: 'THE Shelter', address: '77 summer street', description: 'This is the very first shelter at Launch Academy!')
Shelter.create!(name: 'Last Hope K9 Rescue', address: '71 Commercial Street, Boston, MA 02109', description: 'Last Hope K9 Rescue (LHK9) is a 501(c)(3), 100% volunteer run, foster based, all breed rescue.')

User.create!(email: '1234@gmail.com', password: '123456')
User.create!(email: '1234@shelter.com', password: '123456789', role: "shelter", shelter_id: 1)

breeds.each do |breed|
  new_breed = Breed.new(name: breed[:name], life_span: breed[:life_span], bred_for: breed[:bred_for], breed_group: breed[:breed_group], weight: breed[:weight][:imperial], height: breed[:height][:imperial], image_url: breed[:image_url])
  if new_breed.save
    puts "#{breed[:name]} successfully created"
  end
end
