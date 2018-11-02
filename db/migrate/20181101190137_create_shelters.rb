class CreateShelters < ActiveRecord::Migration[5.2]
  def change
    create_table :shelters do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :description, null: false

      t.belongs_to :user, foreign_key: "shelter_id"

      t.timestamps null: false
    end
  end
end
