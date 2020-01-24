require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :shelter do
    name { "Shelter" }
    address { "77 Summer St Boston MA" }
    description { "Launch Academy Animal Shelter" }
    user_id { 1 }
  end

  factory :breed do
    name { "Puppy" }
    life_span { "This is a puppy lifespan" }
    breed_group { "This breed is part of a XYZ group" }
    weight { "This breed usually weighs XYZ amount at adulthood" }
    height { "This breed is usually XYZ inches tall" }
    image_url { "fakeimage.com" }
  end

  factory :dog do
    name { "Sruffy" }
    age { "7" }
    story { "Doggy Story" }
    breed_id { 1 }
    shelter_id { 1 }
  end

  factory :favorite do
    
  end
end
