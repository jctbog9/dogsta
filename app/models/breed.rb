class Breed < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :img_url, presence: true

  has_many :dogs
end
