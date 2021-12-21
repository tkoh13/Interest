import React, { Component } from 'react'

class BoardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.board.title,
            description: this.props.board.description,
            private: this.props.board.private || false,
            creator_id: this.props.board.creator_id,
        };
        this.state.errors = this.props.errors || null;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        e.preventDefault();
        this.props.createBoard(this.state)
            .then(this.props.closeModal)
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
                    <label>Name
                        <input 
                            type='text' 
                            className='bf-input'
                            placeholder="Like 'Places to Go' or 'Recipes to Make'"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <label>Description
                        <input 
                            type='textarea' 
                            className='bf-input'
                            placeholder="What's your board about?"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                    <label>
                        <div>Keep this board secret</div> 
                        <div>So only you and collaborators can see it.</div>
                        <input 
                            type='checkbox' 
                            value={this.state.private}
                            // name={this.state.private}
                            onChange={this.update('private')}
                        />
                    </label>
                    <button>
                        {formType === 'Create' ? 'Create' : 'Done'}
                    </button>
                </form>
            </div>
        )

    }
}

export default BoardForm;