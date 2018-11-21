require 'httparty'

class Breed < ApplicationRecord
  validates :name, presence: true
  validates :life_span, presence: true
  validates :bred_for, required: false
  validates :breed_group, required: false
  validates :weight, presence: true
  validates :height, presence: true

  has_many :dogs

  def self.seed
    @breeds = HTTParty.get('https://api.thedogapi.com/v1/breeds')
    @breeds.each do |breed|
      dog_breed = HTTParty.get("https://api.thedogapi.com/v1/breeds/#{breed["id"]}")
      Breed.create!(name: dog_breed["name"], life_span: dog_breed["life_span"], bred_for: dog_breed["bred_for"], breed_group: dog_breed["breed_group"], weight: dog_breed["weight"]["imperial"], height: dog_breed["height"]["imperial"])
    end
    # curl the breeds api to get all the breeds and store that in an instance variable
    # loop through the stored breeds data to get more specific info on each one. While looping, create a new breed record for each one!
  end

end
