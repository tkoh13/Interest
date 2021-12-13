import React from 'react';
import BoardPreview from './BoardPreview';
import { BsPlusLg } from 'react-icons/bs';

const BoardIndex = (props) => {
    const { currentUser, user, userId, boards } = props

    return (
        <div className='board-index-container'>  
            <div className='board-index-create'>
                <div className='create-board'>
                    <BsPlusLg className="create-board-icon" />
                </div>
            </div>              
            <div className='board-grid'>
                {boards.map((board) => (
                        <BoardPreview board={board} key={board.id}/>
                ))}
            </div>
        </div>
    )

}

export default BoardIndex;