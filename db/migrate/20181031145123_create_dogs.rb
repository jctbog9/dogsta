class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name, null: false
      t.integer :age, null: false
      t.string :story, null: false

      t.belongs_to :breed, null: false
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
