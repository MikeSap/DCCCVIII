class BankSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :sounds
end
