class Api::V1::BreedsController < ApplicationController
  def index
    render json: Breed.all
  end

  def show
    render json: Breed.find(params[:id])
  end

end
