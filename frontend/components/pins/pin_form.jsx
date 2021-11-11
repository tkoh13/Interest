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
        const formData = new FormData();
        const { title, creator_id, description, photoFile } = this.state;
        formData.append('pin[title]', title);
        formData.append('pin[creator_id]', creator_id);
        formData.append('pin[description]', description);

        if (photoFile) {
            formData.append('pin[photo]', photoFile);
        }

        this.props.createPin(formData)
            .then(() => closeModal());
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
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <div className="icon-container"><img src={window.arrowUp} className="icon"/></div>;
        const { formType } = this.props
        return (
            <div className="pfc">
                <form className="pfc pin-form" onSubmit={this.handleSubmit}>
                    <section className="pfc upload-img-container">
                        <div className="pfc img-preview">
                            <div id="dotted-border">
                                {preview}
                                <div>Click to upload</div>
                                <div>Recommendation: Use high-quality .jpg less than 20MB</div>
                                <label className="pfc image-input">
                                    <input
                                        type="file"
                                        field="photo"
                                        className="pin-file-input"
                                        onChange={this.handleFile}
                                    />
                                </label>
                            </div>
                        </div>
                    </section>
                    <section className="pfc pin-details">
                        <header className="pfc pin-header">
                            <h1 className="pfc pin-header-title">
                                {formType === "Create" ? "Create a Pin" : "Edit this Pin"}
                            </h1>
                        </header>
                        <label className="pfc details-input">
                            <input type="text" field="title" className="pin-title-input" value={this.state.title} placeholder="Add your title" onChange={this.update}/>
                            <input type="textarea" field="description" className="pin-description-input" value={this.state.description} placeholder="Tell everyone what your Pin is about" onChange={this.update}/>
                        </label>
                        {this.renderErrors()}
                    </section>
                </form>
            </div>
        );
    }
}

export default PinForm
