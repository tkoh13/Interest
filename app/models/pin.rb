class Pin < ApplicationRecord
    validates :creator_id, :title, presence: true 
    
    has_one_attached :photo

    belongs_to :user,
        foreign_key: :creator_id,
        class_name: :User

    # belongs to mutliple boards?
    # photo file validation? 

end
