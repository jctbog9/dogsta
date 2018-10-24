class Api::V1::RandomBreedController < ApplicationController
  def index
    render json: Breed.all.sample
  end

end
