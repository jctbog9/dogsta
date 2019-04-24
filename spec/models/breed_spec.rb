require 'rails_helper'

RSpec.describe Breed, type: :model do

  breed = FactoryBot.create(:breed,
    name: "test name",
    life_span: "This is a lifespan",
    bred_for: "Breeding reason",
    breed_group: "Breed Group",
    weight: "Weight",
    height: "Height"
  )

  it "should have valid name" do
    expect(breed[:name])
    expect(breed[:name]).to eq("test name")
  end

  it "should have valid lifespan" do
    expect(breed[:life_span])
    expect(breed[:life_span]).to eq("This is a lifespan")
  end

  it "should have valid bred_for instance" do
    expect(breed[:bred_for]).to eq("Breeding reason")
  end

  it "should have valid breed_group" do
    expect(breed[:breed_group]).to eq("Breed Group")
  end

  it "should have valid weight" do
    expect(breed[:weight])
    expect(breed[:weight]).to eq("Weight")
  end

  it "should have a valid height" do
    expect(breed[:height])
    expect(breed[:height]).to eq("Height")
  end
end
