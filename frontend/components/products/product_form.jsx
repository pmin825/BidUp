import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.product 
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[name]', this.state.name);
        formData.append('product[price]', this.state.price);
        formData.append('product[description]', this.state.description);
        formData.append('product[location]', this.state.location);
        formData.append('product[seller_id]', this.state.seller_id);
        formData.append('product[photoFile]', this.state.photoFile);

        this.props.processForm(formData)
            .then(() => {
                this.props.history.push('/')
            });
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: reader.result });
        }
        if (file) {
            reader.readAsDataURL(file);
        } 

    }

    render() {

        return(
            <div className="product-form-container">
                <form className="product-form-wrapper" onSubmit={this.handleSubmit}>
                    <h1>Sell your product</h1>
                    <div className="product-form-section">
                        <div>Upload your photo here:
                            <input type="file" onChange={this.handleFile}/>
                        </div>
                        <label>Product name:
                            <input type="text" value={this.state.name} onChange={this.update('name')}/>
                        </label>
                        <label>Price wanted:
                            <input type="text" value={this.state.price} onChange={this.update('price')}/>
                        </label>
                        <label>Location:
                            <input type="text" value={this.state.location} onChange={this.update('location')}/>
                        </label>
                        <label className="prod-form-desc">Enter a description about your product here:
                            <textarea value={this.state.description} onChange={this.update('description')}/>
                        </label>
                        <button type="submit">Create your product listing now!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(ProductForm)