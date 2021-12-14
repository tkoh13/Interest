@follows.each do |follow|
    json.set! follow.id do
        json.extract! follow, :id, :follower_id, :followed_id, :created_at
            json.followed follow.followed_id do |user|
                json.extract! user, :id, :email, :username
                json.photoUrl url_for(user.photo) if user.photo.attached? 
            end
    end
end