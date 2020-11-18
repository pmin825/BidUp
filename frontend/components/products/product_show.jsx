import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import StarRating from '../../components/rater/star_rating';


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product;
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId).then(() => {
            this.setState(this.props.product);
        })
        this.props.fetchUsers();
        window.scrollTo(0, 0);
    }


    render() {
        let showProduct;
        this.props.product ? showProduct = this.props.product : showProduct = null;

        let editButton;
            if (this.props.product.seller_id === this.props.currentUser) {
                editButton = <Link to={`/products/${this.props.product.id}/edit`}><button className="edit-button">EDIT LISTING</button></Link>
            }   else {
                editButton = null;
            }

        let deleteButton;
            if (this.props.product.seller_id === this.props.currentUser) {
                deleteButton = <button className="delete-button" onClick={() => this.props.deleteProduct(this.props.product.id).then(() => {
                    this.props.history.push('/')})}>DELETE LISTING</button>
            }   else {
                deleteButton = null;
            }

        let sellerName
        this.props.users[this.props.product.seller_id] ? sellerName = this.props.users[this.props.product.seller_id].username : sellerName = null;
        

            debugger
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
                        <div className="make-a-bid">
                            <i className="fas fa-user-circle"></i>
                            <p className="seller-name">{sellerName}</p>
                            {/* <StarRating /> */}
                            <button className="submitbid-button" onClick={()=> this.props.openModal('submitbid')}>Submit a Bid</button>
                        </div>
                        <div className="show-border-line">
                        </div>
                        {editButton}
                        {deleteButton}
                        <h4>Description</h4>
                        <div className="show-prod-desc">
                            <p>{this.props.product.description}</p>
                        </div>
                        <div className="show-border-line2">
                        </div>
                    </div>
                </div>
            </div>
            )
        )
    }
}

export default withRouter(ProductShow);