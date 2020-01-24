class AddImageUrlToBreed < ActiveRecord::Migration[5.2]
  def up
    add_column :breeds, :image_url, :string
  end

  def down
    remove_column :breeds, :image_url, :string
  end
end
