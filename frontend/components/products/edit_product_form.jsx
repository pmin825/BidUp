import React from 'react';
import { withRouter } from 'react-router-dom';

class EditProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.product 
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){

        if (this.props.currentUser != this.props.product.seller_id) {
            this.props.history.push('/')
        }

        if (this.props.formType === 'update') {
            this.props.fetchProduct(this.props.match.params.productId);
        }

        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearProductErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
    
        if (this.state.photoFile !== undefined) {
        let productId = this.props.match.params.productId 
        const formData = new FormData();
        
        formData.append('product[name]', this.state.name);
        formData.append('product[price]', this.state.price);
        formData.append('product[description]', this.state.description);
        formData.append('product[location]', this.state.location);
        formData.append('product[seller_id]', this.state.seller_id);
        formData.append('product[photoFile]', this.state.photoFile);
        formData.append('product[id]', productId);
           
        this.props.updateProduct(formData)
            .then(() => {
                this.props.history.push('/')
            })
        }   else {
   
            this.props.updateProduct2(this.state)
            .then(() => {
                this.props.history.push('/')
            })
        }
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
        this.setState({photoValue: e.currentTarget.value.slice(12, (e.currentTarget.value).length)})
    }

    
    render() {

        let nameError;
        if (this.props.errors.includes("Name can't be blank")) nameError = "*Name can't be blank"
        
        let priceError;
        if (this.props.errors.includes("Price can't be blank")) priceError = "*Enter a price"
        if (this.props.errors.includes("Price is not a number")) priceError = "*Price must be a number value"

        let descriptionError;
        if (this.props.errors.includes("Description can't be blank")) descriptionError = "*Description can't be blank"

        let locationError;
        if (this.props.errors.includes("Location can't be blank")) locationError = "*Please enter a location"

        const preview = this.state.photoUrl ? 
        <>
        <p>New Photo:</p>
        <img className="photo-prev" src={this.state.photoUrl}/>
        </> 
        : null 
        return(
            <div className="plist-container">
                <div className="form-banner">
                    <h1>Update your product listing</h1>
                </div>
                <div className="product-form-container2">
                    <form className="product-form-wrapper" onSubmit={this.handleSubmit}>
                        <div className="product-form-section">
                            
                            <div className ="photo-input-container">
                                <label>
                                    <div className="photo-input"><span>Edit your product photo</span>
                                        <input type="file" onChange={this.handleFile} 
                                            className={this.state.photoUrl !== "" ? "hidden-file-form" : "file-form"} 
                                        />
                                        <div className="custom-file">
                                            <span className="custom-file-upload">Choose File</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <p>Current Photo:</p>
                            <img className="prev-list-photo" src={this.props.product.photo_url} /> 
                            
                            {preview}
                            <label><span>Product name</span>
                                <p>Include keywords that buyers would use to search for your item.</p>
                                <span className="create-error">{nameError}</span>
                                <input type="text" value={this.state.name} onChange={this.update('name')}/>
                            </label>
                            <label><span>Price</span>
                                <p>Select a starting price for customers to bid on.</p>
                                <span className="create-error">{priceError}</span>
                                <input type="text" value={this.state.price} onChange={this.update('price')}/>
                            </label>
                            <label><span>Location</span>
                                <p>Enter your location so local buyers can find you.</p>
                                <span className="create-error">{locationError}</span>
                                <input type="text" value={this.state.location} onChange={this.update('location')}/>
                            </label>
                            <label className="prod-form-desc"><span>Description</span>
                                <p>Write a description about your product here. The more information the better. </p>
                                <span className="create-error">{descriptionError}</span>
                                <textarea value={this.state.description} onChange={this.update('description')}/>
                            </label>
                            <div className="create-update-button">
                                <button type="submit">Update now!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditProductForm)


