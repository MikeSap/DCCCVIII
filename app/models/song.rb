class Song < ApplicationRecord
    has_many :tracks

    validates :title, uniqueness: {message: "must be unique"}
    validates :creator, presence: {message: "must be input into form"} 
    validates :title, presence: {message: "must be input into form"} 

end