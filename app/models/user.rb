class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader

  validates :role, presence: true

  belongs_to :shelter, required: false

  has_many :favorites
  has_many :dogs, through: :favorites

end
