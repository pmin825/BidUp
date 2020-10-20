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
        return (
            !showProduct ? null : (
            <div className="show-page">
                <div className="show-product-body">
                    <div className="show-top-row">
                        <p>BidUp is the easiest way to buy and sell locally. Get the free app.</p>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="mask">
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
                            <i class="fas fa-tag">
                                <p>${this.props.product.price}.00</p>
                            </i>
                            <p>{this.props.product.name}</p>
                        </div>
                        <div className="show-location">
                            <p>{this.props.product.location}</p>
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Local pickup</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        )
    }
}

export default withRouter(ProductShow);