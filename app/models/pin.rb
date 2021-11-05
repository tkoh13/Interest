class Pin < ApplicationRecord
    validates :creator_id, :title, presence: true 

    belongs_to :user,
        foreign_key: :creator_id,
        class_name: :User

    has_one_attached :photo

end
