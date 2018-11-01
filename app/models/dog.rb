class Dog < ApplicationRecord
  validates :name, presence: true
  validates :age, numericality: true, presence: true
  validates :story, presence: true

  has_many :favorite
  has_many :users, through: :favorites
  
  belongs_to :breed
end
