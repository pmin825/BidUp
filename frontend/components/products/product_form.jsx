import React from "react";
import { withRouter } from "react-router-dom";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === "update") {
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }

    componentWillUnmount() {
        this.props.clearProductErrors();
    }

    componentDidUpdate(prevProps) {
        if (this.props.formType === "update") {
            if (prevProps.product.id != this.props.match.params.productId) {
                this.props
                    .fetchProduct(this.props.match.params.productId)
                    .then(() => {
                        this.setState(this.props.product);
                    });
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.photoFile === null) {
            this.setState({
                photoError: "*Photo required, upload before proceeding.",
            });
        } else {
            const formData = new FormData();
            formData.append("product[name]", this.state.name);
            formData.append("product[price]", this.state.price);
            formData.append("product[description]", this.state.description);
            formData.append("product[location]", this.state.location);
            formData.append("product[seller_id]", this.state.seller_id);
            formData.append("product[photoFile]", this.state.photoFile);
            this.props.processForm(formData).then(() => {
                this.props.history.push("/");
            });
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
            this.setState({ photoError: "" });
        }
    }

    render() {
        const preview = this.state.photoUrl ? (
            <img className="photo-prev" src={this.state.photoUrl} />
        ) : null;

        let nameError;
        if (this.props.errors.includes("Name can't be blank"))
            nameError = "*Name can't be blank";

        let priceError;
        if (this.props.errors.includes("Price can't be blank"))
            priceError = "*Enter a price";
        if (this.props.errors.includes("Price is not a number"))
            priceError = "*Price must be a number value";

        let descriptionError;
        if (this.props.errors.includes("Description can't be blank"))
            descriptionError = "*Description can't be blank";

        let locationError;
        if (this.props.errors.includes("Location can't be blank"))
            locationError = "*Please enter a location";

        return (
            <div className="plist-container">
                <div className="form-banner">
                    <h1>Create your product listing</h1>
                </div>
                <div className="product-form-container2">
                    <form
                        className="product-form-wrapper"
                        onSubmit={this.handleSubmit}
                        noValidate
                    >
                        <div className="product-form-section">
                            <div className="photo-input-container">
                                <label>
                                    <div className="photo-input">
                                        <span>Upload a new photo:</span>
                                        <input
                                            type="file"
                                            onChange={this.handleFile}
                                            className={
                                                this.state.photoUrl !== ""
                                                    ? "hidden-file-form"
                                                    : "file-form"
                                            }
                                            required={
                                                this.state.photoFile === null
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <div className="custom-file">
                                            <span className="custom-file-upload">
                                                Choose File
                                            </span>
                                            {/* <span>{this.state.photoValue !== "" ? this.state.photoValue : "No image uploaded"}</span> */}
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {preview}
                            <span className="create-error">
                                {this.state.photoError}
                            </span>
                            <label>
                                <span>Product name</span>
                                <p>
                                    Include keywords that buyers would use to
                                    search for your item.
                                </p>
                                <span className="create-error">
                                    {nameError}
                                </span>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update("name")}
                                />
                            </label>
                            <label>
                                <span>Price</span>
                                <p>
                                    Select a starting price for customers to bid
                                    on.
                                </p>
                                <span className="create-error">
                                    {priceError}
                                </span>
                                <input
                                    type="text"
                                    value={this.state.price}
                                    onChange={this.update("price")}
                                />
                            </label>
                            <label>
                                <span>Location</span>
                                <p>
                                    Enter your location so local buyers can find
                                    you.
                                </p>
                                <span className="create-error">
                                    {locationError}
                                </span>
                                <input
                                    type="text"
                                    value={this.state.location}
                                    onChange={this.update("location")}
                                />
                            </label>
                            <label className="prod-form-desc">
                                <span>Description</span>
                                <p>
                                    Write a description about your product here.
                                    The more information the better.{" "}
                                </p>
                                <span className="create-error">
                                    {descriptionError}
                                </span>
                                <textarea
                                    value={this.state.description}
                                    onChange={this.update("description")}
                                />
                            </label>
                            <div className="create-update-button">
                                <button type="submit">Create now!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductForm);
