class Api::V1::CurrentShelterController < ApplicationController
  def index
    render json: shelter
  end

  def shelter
    shelter = current_user.shelter
    {id: shelter.id, name: shelter.name, description: shelter.description, dogs: shelter.dogs}
  end
end
