require 'rails_helper'

RSpec.describe Dog, type: :model do
  user = FactoryBot.create(:user)
  shelter =  FactoryBot.create(:shelter, user_id: user[:id])

  breed = FactoryBot.create(:breed)

  dog = FactoryBot.create(:dog,
    name: "Dog",
    story: "This is a story",
    age: 3,
    shelter_id: shelter[:id]
  )

  it "should have valid name" do
    expect(:name)
    expect(dog[:name]).to eq("Dog")
  end

  it "should have valid story" do
    expect(dog[:story]).to eq("This is a story")
  end

  it "should have valid age" do
    expect(dog[:age])
    expect(dog[:age]).to eq(3)
  end
end
