@board_to_pins.each do |board_to_pin|
    json.set! board_to_pin.id do
        json.extract! board_to_pin, :id, :board_id, :pin_id
        # json.set! board_to_pin.user.id do 
        #     json.extract! board_to_pin, :id, :email, :username
        #     json.photoUrl url_for(follow.follower.photo) if follow.follower.photo.attached? 
        # end
    end
end