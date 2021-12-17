class BoardToPin < ApplicationRecord
    belongs_to :pin

    belongs_to :board

    has_one :user, :through => :board
end
