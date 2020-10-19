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
            !showProduct ? <div></div> : (
            <div className="product-body">
                <div className="product-container">
                    <img src={this.props.product.photo_url} />
                    <p>{this.props.product.name}</p>
                    <p>{this.props.product.description}</p>
                    <Link to="/">Back to index</Link>
                </div>
            </div>
            )
        )
    }
}

export default withRouter(ProductShow);