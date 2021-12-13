class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render "api/users/show"
        # need to factor in showing users from follows
        # @user = User.where(id: params[:id]).includes(:followers, :followees)first
    end

    def update
        @user = User.find(params[:id])
        if @user == current_user
            if @user.update(user_params)
                render 'api/users/show'
            else
                render json: @user.errors.full_messages, status: 422
            end
        else
            render json: ['Invalid credentials'], status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :username, :photo)
    end

end