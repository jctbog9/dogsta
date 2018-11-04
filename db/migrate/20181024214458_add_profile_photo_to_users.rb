class AddProfilePhotoToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :profile_photo, :string, default: "default.jpg"
  end

  def down
    add_column :users, :profile_photo
  end
end
