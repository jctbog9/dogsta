class AddSheltersToUser < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :shelter_id, :bigInt, optional: true
  end

  def down
    remove_column :users, :shelter_id
  end
end
