class Api::FollowsController < ApplicationController

    def index
        @following = Follow.where("follower_id = ? OR followee_id = ?", params[:user_id], params[:user_id])
        if !@following 
            render json: ["No followers or following"], status: 404
        else
            render "api/follows/index"
        end
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render "api/follows/show"
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        if @follow && (@follow.follower_id == current_user.id)
            @follow.destroy
            render "api/follows/show"
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    private
    def follow_params
        params.require(:follow).permit(:follower_id, :followee_id)
    end

end