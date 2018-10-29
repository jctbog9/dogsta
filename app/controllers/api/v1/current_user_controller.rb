class Api::V1::CurrentUserController < ApplicationController
  def index
    user = {
      id: current_user.id,
      email: current_user.email
    }
    render json: user
  end
end
