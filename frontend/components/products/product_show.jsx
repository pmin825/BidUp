import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product;
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId).then(() => {
            this.setState(this.props.product);
        })
    }


    render() {
        let showProduct;
        this.props.product ? showProduct = this.props.product : showProduct = null;

        let editButton;
            if (this.props.product.seller_id === this.props.currentUser) {
                editButton = <div>testing edit button</div>
            }   else {
                editButton = null;
            }


        return (
            !showProduct ? null : (
            <div className="show-page">
                <div className="show-product-body">
                    <div className="show-top-row">
                        <p>BidUp is the easiest way to buy and sell locally. Get the free app.</p>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="mask">
                        <div className="show-product-image-cont">
                            <img src={this.props.product.photo_url} />
                            <img src={this.props.product.photo_url} />
                            <img src={this.props.product.photo_url} />
                        </div>
                    </div>
                </div>
                <div className="show-description-body">
                    <div className="show-description-cont">
                        <div className="show-price-name">
                            <i className="fas fa-tag">
                                <p>${this.props.product.price}.00</p>
                            </i>
                            <p>{this.props.product.name}</p>
                        </div>
                        <div className="show-location">
                            <p>{this.props.product.location}</p>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Local pickup</p>
                        </div>
                        <div className="show-border-line">
                        </div>
                        {editButton}
                        <h4>Description</h4>
                        <div className="show-prod-desc">
                            <p>{this.props.product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        )
    }
}

export default withRouter(ProductShow);