class BreedSerializer < ActiveModel::Serializer
  attributes :id, :name, :life_span, :bred_for, :breed_group, :weight, :height, :dogs

end
