class Pin < ApplicationRecord
    validates :creator_id, :title, presence: true 
    
    has_one_attached :photo

    belongs_to :user,
        foreign_key: :creator_id


    has_many :board_to_pin

    has_many :boards, 
        through: :board_to_pin


    def unique_key
        @key = self.created_at.to_i/rand(100..200)
    end
    # belongs to mutliple boards?
    # photo file validation? 

end
