import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.product 
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
        if (this.props.formType === 'update') {
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.formType === 'update') {
            if (prevProps.product.id != this.props.match.params.productId) {
                this.props.fetchProduct(this.props.match.params.productId).then(() => {
                    this.setState(this.props.product)
                })
            }
        }
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

        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: reader.result });
        }
        if (file) {
            reader.readAsDataURL(file);
        } 

    }

    
    render() {
        const preview = this.state.photoUrl ? <img className="photo-prev" src={this.state.photoUrl}/> : null 
        return(
            <div className="plist-container">
                <div className="form-banner">
                    <h1>Create your product listing</h1>
                </div>
                <div className="product-form-container2">
                    <form className="product-form-wrapper" onSubmit={this.handleSubmit}>
                        <div className="product-form-section">
                            <div className="photo-input"><span>Upload a photo:</span>
                                <input type="file" onChange={this.handleFile}/>
                            </div>
                            {preview}
                            <label>Product name:
                                <p>Include keywords that buyers would use to search for your item.</p>
                                <input type="text" value={this.state.name} onChange={this.update('name')}/>
                            </label>
                            <label>Price:
                                <p>Select a starting price for customers to bid on.</p>
                                <input type="text" value={this.state.price} onChange={this.update('price')}/>
                            </label>
                            <label>Location:
                                <p>Enter your location so local buyers can find you.</p>
                                <input type="text" value={this.state.location} onChange={this.update('location')}/>
                            </label>
                            <label className="prod-form-desc">Description:
                                <p>Write a description about your product here. The more information the better. </p>
                                <textarea value={this.state.description} onChange={this.update('description')}/>
                            </label>
                            <div className="create-update-button">
                                <button type="submit">Create now!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductForm)