class DogSerializer < ActiveModel::Serializer
  attributes :id, :age, :name, :story, :breed_id, :shelter_id, :created_at, :updated_at, :shelter

end
