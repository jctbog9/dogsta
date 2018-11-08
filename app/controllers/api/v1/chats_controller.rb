class Api::V1::ChatsController < ApplicationController

  def show
    render json: Message.where(params[:id] === :shelter).last(10)

  end

end
