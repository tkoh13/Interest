class Api::UsersController < ApplicationController
    def create
        # debugger
        @user = User.new(user_params)
        @user.reset_session_token!
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        render :show
    end

    def update
        # @user = User.find(params[:id])
        @user = User.find_by_credentials(user_params)

        # if @user.update(user_params)
        if !@user.nil?
            # render :show
            render :update
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end