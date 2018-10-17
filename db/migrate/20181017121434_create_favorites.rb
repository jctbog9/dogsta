class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.belongs_to :user
      t.belongs_to :breeds

      t.timestamps null: false
    end
  end
end
