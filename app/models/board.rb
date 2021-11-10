class Board < ApplicationRecord
    validates :creator_id, :title, presence: true 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id
end
