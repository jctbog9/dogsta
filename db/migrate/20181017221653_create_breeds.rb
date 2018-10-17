class CreateBreeds < ActiveRecord::Migration[5.2]
  def change
    create_table :breeds do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :img_url, null: false

      t.timestamps null: false
    end
  end
end
