class AddShelterToChat < ActiveRecord::Migration[5.2]
  def change
    add_reference :chats, :shelter, index: true
  end
end
