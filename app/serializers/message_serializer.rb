class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :updated_at, :user

end
