require 'rails_helper'

RSpec.describe Favorite, type: :model do

  user = FactoryBot.create(:user, email: "test@email.com")
  shelter =  FactoryBot.create(:shelter, user_id: user[:id])
  
  dog = FactoryBot.create(:dog, shelter_id: shelter[:id])

  favorite = FactoryBot.create(:favorite, user_id: user[:id], dog_id: dog[:id])

  it "should have valid user association" do
    expect(favorite[:user_id])
    expect(favorite[:user_id]).to eq(user[:id])
  end

  it "should have valid dog association" do
    expect(favorite[:dog_id])
    expect(favorite[:dog_id]).to eq(dog[:id])
  end
end
