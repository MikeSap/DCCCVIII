class Song < ApplicationRecord
    has_many :tracks

    validates :title, uniqueness: true
    validates :title, :creator, presence: true 

end

