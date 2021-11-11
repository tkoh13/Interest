class Board < ApplicationRecord
    validates :creator_id, :title, presence: true 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :creator_id

    has_many :board_to_pin

    has_many :pins, 
        through: :board_to_pin

end
