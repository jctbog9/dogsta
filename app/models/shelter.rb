class Shelter < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :description, presence: true

  belongs_to :user, foreign_key: :shelter_id, required: false

  has_many :dogs

end
