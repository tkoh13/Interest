import React from 'react';

const BoardPreview = (props) => {
    const { board, pins } = props;
    const { title } = board;

    return (
        <div className='board-preview-container'>
            {/* Link to /boards/boardId passing in board.pins as props */}
            <div className='board-preview-image'>
                {pins[0].photoUrl ? 
                    <img className="left-board-preview-image" src={pins[0].photoUrl} /> : 
                    <h1 className="left-board-preview-image"></h1>
                }
                <div className="right-images">
                    {pins[1] && pins[1].photoUrl ? 
                        <img className="rt-board-preview-image" src={pins[1].photoUrl} /> : 
                        <h1 className="rt-board-preview-image"></h1>
                    }
                    {pins[2] && pins[2].photoUrl ? 
                        <img className="rb-board-preview-image" src={pins[2].photoUrl} /> : 
                        <h1 className="rb-board-preview-image"></h1>
                    }
                </div>
            </div>
            <div className='board-preview-details'>
                <h1 className='board-preview-title'>{title}</h1>
                <h2 className='board-preview-count'>{pins.length} Pins</h2>
            </div>
        </div>
    )
}

export default BoardPreview; 