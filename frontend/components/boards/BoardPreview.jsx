import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardPreview extends Component {
    constructor(props) {
        super(props) 
    }
// const BoardPreview = (props) => {

    render() {
        // debugger
        const { board, pins, user } = this.props;
        const { title } = board;
        if (!pins.length) {
            return (
                <Link to={`/boards/${board.id}`}>
                <div className='all-pins-container'>
                    {/* Link to /boards/boardId passing in board.pins as props */}
                    {/* <div className='all-pins-preview'>

                </div> */}
                    <div className='board-preview-image'>
                        <h1 className="left-board-preview-image">No pins</h1>
                        <div className="right-images">
                            <h1 className="rt-board-preview-image">yet</h1>
                            <h1 className="rb-board-preview-image"></h1>
                        </div>
                    </div>
                    <div className='board-preview-details'>
                        <h1 className='board-preview-title'>{title}</h1>
                        <h2 className='board-preview-count'>{pins.length} Pins</h2>
                    </div>
                </div>
                </Link>
            )
        } else if (board.title === 'All Pins') {
            return (
                <Link to={`/users/${user.id}/pins`}>
                {/* <Link to={`/boards/${board.id}`}> */}
                <div className='all-pins-container'>
                    {/* Link to /boards/boardId passing in board.pins as props */}
                    {/* <div className='all-pins-preview'>

                </div> */}
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
                </Link>
            )
        } else {
            return (
                <Link to={`/boards/${board.id}`}>
                <div className='all-pins-container'>
                    {/* Link to /boards/boardId passing in board.pins as props */}
                    {/* <div className='all-pins-preview'>

                </div> */}
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
                </Link>
            )
        }
        
        // const boardPreview = board.title === "All Pins" ? (
        //     <div className='all-pins-container'>
        //         {/* Link to /boards/boardId passing in board.pins as props */}
        //         {/* <div className='all-pins-preview'>

        //         </div> */}
        //         <div className='board-preview-image'>
        //             {pins[0].photoUrl ? 
        //                 <img className="left-board-preview-image" src={pins[0].photoUrl} /> : 
        //                 <h1 className="left-board-preview-image"></h1>
        //             }
        //             <div className="right-images">
        //                 {pins[1] && pins[1].photoUrl ? 
        //                     <img className="rt-board-preview-image" src={pins[1].photoUrl} /> : 
        //                     <h1 className="rt-board-preview-image"></h1>
        //                 }
        //                 {pins[2] && pins[2].photoUrl ? 
        //                     <img className="rb-board-preview-image" src={pins[2].photoUrl} /> : 
        //                     <h1 className="rb-board-preview-image"></h1>
        //                 }
        //             </div>
        //         </div>
        //         <div className='board-preview-details'>
        //             <h1 className='board-preview-title'>{title}</h1>
        //             <h2 className='board-preview-count'>{pins.length} Pins</h2>
        //         </div>
        //     </div>
        // ) : (
        //     <div className='board-preview-container'>
        //         {/* Link to /boards/boardId passing in board.pins as props */}
        //         <div className='board-preview-image'>
        //             {pins[0].photoUrl ?
        //                 <img className="left-board-preview-image" src={pins[0].photoUrl} /> :
        //                 <h1 className="left-board-preview-image"></h1>
        //             }
        //             <div className="right-images">
        //                 {pins[1] && pins[1].photoUrl ?
        //                     <img className="rt-board-preview-image" src={pins[1].photoUrl} /> :
        //                     <h1 className="rt-board-preview-image"></h1>
        //                 }
        //                 {pins[2] && pins[2].photoUrl ?
        //                     <img className="rb-board-preview-image" src={pins[2].photoUrl} /> :
        //                     <h1 className="rb-board-preview-image"></h1>
        //                 }
        //             </div>
        //         </div>
        //         <div className='board-preview-details'>
        //             <h1 className='board-preview-title'>{title}</h1>
        //             <h2 className='board-preview-count'>{pins.length} Pins</h2>
        //         </div>
        //     </div>
        // )

        // return (
        //     <div>
        //         {boardPreview}
        //     </div>
        // )
    }
}

export default BoardPreview; 