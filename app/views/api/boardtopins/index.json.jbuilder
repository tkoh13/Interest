@board_to_pins.each do |board_to_pin|
    json.set! board_to_pin.id do
        json.extract! board_to_pin, :id, :board_id, :pin_id
        json.set! board_to_pin.pin.id do 
        # json.pin board_to_pin.pin do |pin|
            json.extract! board_to_pin.pin, :id, :creator_id, :title, :description, :created_at
            json.photoUrl url_for(board_to_pin.pin.photo)
            end

            # json.set! board_to_pin.user.id do 
            #     json.extract! board_to_pin.user, :id, :email, :username
            #     json.photoUrl url_for(follow.follower.photo) if follow.follower.photo.attached? 
            # end
        end
    end
    @pins.each do |pin|
        json.set! pin.id do
            json.set! pin.id do
                json.extract! pin, :id, :creator_id, :title, :description, :unique_key, :boards, :board_to_pins, :created_at
                json.photoUrl url_for(pin.photo)
            end
        end
    end