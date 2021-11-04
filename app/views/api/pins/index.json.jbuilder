@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :creator_id, :title, :description
    end
end