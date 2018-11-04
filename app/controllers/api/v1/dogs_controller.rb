class Api::V1::DogsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Dog.all
  end

  def create
    @dog = Dog.new(dog_params)
    if @dog.save
      render json: {dog: @dog}
    else
      render json: {error: @dog.errors.full_messages}
    end
  end

  def destroy
    @dog = Dog.find(params[:id])
    @dog.destroy
    render json: { message: "Review deleted successfully" }
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :story, :age, :breed_id, :shelter_id)
  end
end