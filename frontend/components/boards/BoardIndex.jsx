import React from 'react';
import BoardPreview from './BoardPreview';
import DropDownButton from '../dropdown/DropDownButton';
import { BsPlusLg } from 'react-icons/bs';

const BoardIndex = (props) => {
    const { currentUser, user, userId, boards, saves, openModal } = props

    let allPins
    !saves.length ? allPins = null : 
    allPins = {
        title: "All Pins",
        pins: saves.map(pin => Object.values(pin)[0])
    }
    
    const allPinsBoard = allPins ? (
        <BoardPreview board={allPins} pins={allPins.pins} />
    ) : (
        null
    )

    return (
        <div className='board-index-container'>  
            <div className='board-index-create'>
                <div className='profile-create'>
                    <DropDownButton type="profileCreate" actions={{ openModal, currentUser }} />
                    {/* <BsPlusLg className="create-board-icon" /> */}
                </div>
            </div>              
            <div className='board-grid'>
                {/* {allPinsBoard} */}
                {boards.map((board) => (
                        <BoardPreview board={board} pins={board.pins} key={board.id}/>
                ))}
            </div>
        </div>
    )

}

export default BoardIndex;