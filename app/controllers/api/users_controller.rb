class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.reset_session_token!
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        render :show
    end

    def update
        @user = User.find_by_credentials(user_params)

        if !@user.nil?
            render :update
        else
            render json: ['Invalid login credentials'], status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :username)
    end

end