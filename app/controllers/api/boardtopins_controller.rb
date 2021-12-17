class BoardToPins < ApplicationController
    def create
        @board_to_pin = BoardToPin.new(board_to_pin_params)
        if @board_to_pin.save
            render 'api/boardtopins/show'
        else
            render json: @board_to_pin.errors.full_messages, status: 422
        end
    end

    def show
        @board_to_pin = BoardToPin.find_by(id: params[:id])
        if !@board_to_pin.nil?
            render 'api/boardtopins/show'
        else
            render json: ["invalid request"], status: 400
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
        @board_to_pin = BoardToPin.find_by(id: params[:id])
        if @board_to_pin && ( @board_to_pin.board_id.creator_id == current_user.id )
            @board_to_pin.destroy

        else
            render json: ['invalid request'], status: 404
        end
    end

    def board_to_pin_params
        params.require(:board_to_pin).permit(:id, :board_id, :pin_id)
    end
end