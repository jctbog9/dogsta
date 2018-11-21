class CreateBreeds < ActiveRecord::Migration[5.2]
  def change
    create_table :breeds do |t|
      t.string :name, null: false
      t.string :life_span, null: false
      t.string :bred_for, default: 'null'
      t.string :breed_group, default: 'dog'
      t.string :weight, null: false
      t.string :height, null: false

      t.timestamps null: false
    end
  end
end
