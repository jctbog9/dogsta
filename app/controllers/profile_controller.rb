class ProfileController < ApplicationController

  def index
    @user = current_user
    @favorites = current_user.favorites
  end

end
