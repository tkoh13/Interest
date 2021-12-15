json.extract! @follow, :id, :follower_id, :followee_id, :created_at
json.set! @follow.follower_id do 
    json.extract! @follow.follower, :id, :email, :username
    json.photoUrl url_for(@follow.follower.photo) if @follow.follower.photo.attached? 
end
json.set! @follow.followee_id do 
    json.extract! @follow.followee, :id, :email, :username
    json.photoUrl url_for(@follow.followee.photo) if @follow.followee.photo.attached? 
end