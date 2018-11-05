class ProfileController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    @favorites = current_user.favorites
  end

end
