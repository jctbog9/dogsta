class Favorite < ApplicationRecord
  validates :user_id, numericality: true, presence: true
  validates :dog_id, numericality: true, presence: true

  belongs_to :user
  belongs_to :dog
end
