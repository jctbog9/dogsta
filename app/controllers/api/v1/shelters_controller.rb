class Api::V1::SheltersController < ApplicationController
  def index
    render json: Shelter.all
  end

  def show
    render json: Shelter.find(params[:id])
  end
end
