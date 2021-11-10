class Pin < ApplicationRecord
    validates :creator_id, :title, presence: true 
    
    has_one_attached :photo

    belongs_to :user,
        foreign_key: :creator_id,
        class_name: :User

    has_and_belongs_to_many :boards , dependent: :nullify

    def unique_key
        @key = self.created_at.to_i
    end
    # belongs to mutliple boards?
    # photo file validation? 

end