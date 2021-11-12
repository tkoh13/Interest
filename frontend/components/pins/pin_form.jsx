import React, { Component } from 'react'
import { closeModal } from '../../actions/modal_actions';

class PinForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: this.props.pin.title,
            description: this.props.pin.description,
            creator_id: this.props.userId,
            photoFile: null,
            photoUrl: null
        };
        this.state.errors = this.props.errors || null;

        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.errors) this.setState({ errors: null })

        if (!this.state.photoFile) {
            return this.setState({ errors: 'No pic, no pin' })
        } else if (!this.state.title) {
            return this.setState({ errors: 'Needs a title!' })
        } else {

        const formData = new FormData();
        const { title, creator_id, description, photoFile } = this.state;
        formData.append('pin[title]', title);
        formData.append('pin[photo]', photoFile)
        formData.append('pin[creator_id]', creator_id);
        formData.append('pin[description]', description);


        this.props.createPin(formData)
        this.props.closeModal()
        }
    }

    renderErrors() {
        if (!this.props.errors) return null
        const errors = this.props.errors
        return (
            <ul className='pin-form-errors'>
                {errors}
            </ul>
        )
    }

    
    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="create-pin-preview"/> : 
        <div className="icon-container">
            <img src={window.arrowUp} className="icon"/>
            <div>Click to upload</div>
            <div>Recommendation: Use high-quality .jpg less than 20MB</div>
        </div>;
        const { formType } = this.props
        return (
            <div className="pfc">
                <form className="pfc pin-form" onSubmit={this.handleSubmit}>
                    <section className="pfc upload-img-container">
                        <label className="pfc image-input">
                            <div className="pfc img-preview">
                                <div id="dotted-border">
                                    {preview}
                                    
                                        <input
                                            type="file"
                                            field="photo"
                                            className="pin-file-input"
                                            onChange={this.handleFile}
                                        />
                                </div>
                            </div>
                        </label>
                    </section>
                    <section className="pfc pin-details">
                        <header className="pfc pin-header">
                            <h1 className="pfc pin-header-title">
                                {formType === "Create" ? "Create a Pin" : "Edit this Pin"}
                            </h1>
                        </header>
                        <label className="pfc details-input">
                            <input type="text" field="title" className="pin-title-input" value={this.state.title} placeholder="Add your title" onChange={this.update("title")}/>
                            <input type="textarea" field="description" className="pin-description-input" value={this.state.description} placeholder="Tell everyone what your Pin is about" onChange={this.update("description")}/>
                        </label>
                        {this.renderErrors()}
                    </section>
                    <button className="button-link">{this.props.formType}</button>
                </form>
            </div>
        );
    }
}

export default PinForm
