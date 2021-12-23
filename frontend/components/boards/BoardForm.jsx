import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class BoardForm extends Component {
    constructor(props) {
        super(props);
        const { board } = this.props
        if (this.props.formType === 'Create') {
            this.state = {
                title: board.title,
                description: board.description,
                private: board.private || false,
                creator_id: board.creator_id
            }
        } else {
            this.state = this.props.board
        }
        this.state.errors = this.props.errors || null;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBoardDelete = this.handleBoardDelete.bind(this);
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        const { fetchBoard, formType, board, boardId } = this.props
        if (formType === 'Edit') {
            // debugger
            // fetchBoard(boardId)
            if (!this.state) {
                this.setState(this.props.board)
            }
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const { fetchBoard, formType, board, boardId } = this.props
    //     if (formType === 'Edit') {
    //         if (prevProps.board !== board) {
    //             console.log("prevState", prevState)
    //             console.log("this.state", this.state)
    //             this.setState(board)
    //         }
    //     }
    // }

    renderDelete() {
        // debugger
        const { formType, board } = this.props
        if (formType === 'Create') return null
        return (
            <Link to={`/users/${board.creator_id}`}>
                <button
                    className='delete-button edit-form'
                    onClick={this.handleBoardDelete}>Delete
                </button>
            </Link>
        )
    }

    handleBoardDelete(e) {
        e.preventDefault()
        // debugger
        const { deleteBoard, closeModal, board } = this.props
        // const boardId = board.id
        // const history = useHistory()
        // history.back().then(() => deleteBoard(boardId))
        deleteBoard(board.id)
            .then(() => closeModal())
            // .then(() => history.back())
            // .then(() => this.handleBack())
            // .then(() => history.push(`/users/${board.creator_id}`))
            // .then(() => browserHistory.push(`/users/${board.creator_id}`))
            // .then(() => navigate(-1))
    }
    
    update(field) {
        return e => {
            if (field === 'private') {
                this.setState({ [field]: !this.state.private })
            } else {
                this.setState({ [field]: e.currentTarget.value })
            }
        }
    }
    
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const { formType, submitBoard, closeModal } = this.props
        if (formType === 'Create') {
            submitBoard(this.state)
                .then(() => closeModal())
        } else {
            submitBoard(this.state)
                .then(() => closeModal())
                // .then(() => history.go())
        }
        // this.handleBack()
    }

    handleBack() {
        const { formType, closeModal } = this.props
        // debugger
        if (formType === 'Create') closeModal()
        else history.back()
    }

    renderErrors() {
        if (!this.props.errors) return null
        return (
            <ul>
                {this.props.error.map((error, i) => (
                    <li className="error-message-board" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        if (!this.props.board || !this.state) return null
        const { formType, } = this.props;
        return(
            <div className='bf-container'>
                <h1>{formType === 'Create' ? 'Create board' : 'Edit your board'}</h1>
                <form onSubmit={this.handleSubmit} className='bf-form'>
                    {this.renderErrors()}
                    <div className='bf-input-name'>Name
                        <div className='bf-label'>
                            <label>
                                <input
                                    type='text'
                                    className='bf-input'
                                    placeholder="Like 'Places to Go' or 'Recipes to Make'"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='bf-input-name'>Description
                        <div className='bf-label'>
                            <label>
                                <input
                                    type='textarea'
                                    className='bf-input'
                                    placeholder="What's your board about?"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='bf-input-name'>
                        <div>
                            <label className='bf-checkbox'>
                                <span>
                                <input
                                    type='checkbox'
                                    value={this.state.private}
                                    checked={!!this.state.private}
                                    // name={this.state.private}
                                    onChange={this.update('private')}
                                    />
                                </span>
                                <span className='checkbox-description'>
                                <div className='checkbox-description-1'>Keep this board secret</div>
                                <div className='checkbox-description-2'>So only you and collaborators can see it.</div>
                                </span>
                            </label>
                        </div>
                    </div>
                    
                    
                    <div className='bf-button'>
                    <button id='signup-button'>
                        {formType === 'Create' ? 'Create' : 'Edit'}
                    </button>
                    {this.renderDelete()}
                    </div>
                </form>
            </div>
        )

    }
}

export default BoardForm;