class Dog < ApplicationRecord
  validates :name, presence: true
  validates :age, numericality: true, presence: true
  validates :story, presence: true

  has_many :favorites
  has_many :users, through: :favorites

  belongs_to :breed
  belongs_to :shelter
end
