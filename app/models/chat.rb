class Chat < ApplicationRecord
  has_many :messages

  belongs_to :shelter

end
