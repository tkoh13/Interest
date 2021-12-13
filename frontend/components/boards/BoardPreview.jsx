import React from 'react';

const BoardPreview = (props) => {
    const { board } = props;


    // console.log(boards.title)
    // console.log(boards.pins)


    return (
        <div className='board-preview-container'>
            board-preview!
            {/* Link to /boards/boardId passing in board.pins as props */}
            
            <h1 className='board-preview-title'>{board.title}</h1>
            <h2 className='board-preview-count'>{board.pins.length} Pins</h2>
        </div>
    )
}

export default BoardPreview; 