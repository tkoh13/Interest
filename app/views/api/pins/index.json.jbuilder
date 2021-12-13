@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :creator_id, :title, :description, :unique_key, :boards, :board_to_pin, :created_at
        json.photoUrl url_for(pin.photo)
    end
end