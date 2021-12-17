class BoardToPins < ApplicationController
    def create
        @board_to_pin = BoardToPin.new(board_to_pin_params)
        if @board_to_pin.save
            render json: ["Saved pin to board"], status: 200
        else
            render json: @board_to_pin.errors.full_messages, status: 422
        end
    end

    def index
        @board_to_pins = BoardToPin.where("user.id = ?", params[:user_id])
        if !@board_to_pins
            render json: ["Nothing saved"]
        else
            render "api/boardtopins/index"
        end
        render :index
    end
    
    def destroy
        @board_to_pin = BoardToPin.find(params[:id])
        if @board_to_pin && ( @board_to_pin.user.id == current_user.id )
            @board_to_pin.destroy
            render json: ["Deleted pin from board"], status: 200 
        else
            render json: ["Invalid request"], status: 404
        end
    end

    def board_to_pin_params
        params.require(:board_to_pin).permit(:id, :board_id, :pin_id)
    end
end