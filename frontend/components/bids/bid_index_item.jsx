import React from 'react';
import {Link} from 'react-router-dom'

class BidIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        if (!this.props.bid) return null;
        if (!this.props.users) return null;
        let bidder;
        bidder = this.props.users[this.props.bid.bidder_id]
        let seller;
        seller = this.props.users[this.props.bid.seller_id]

        if (!bidder) return null;
        if (!seller) return null;
    
        if (this.props.bid.bidder_id === this.props.currentUser.id) {
            return(
                <Link className="bid-link" to={`/products/${this.props.bid.product_id}`}>
                    <div className="bid-container">
                        <span className="bid-product">Product: {this.props.bid.productName}</span>
                        <span className="bid-amount">Bid Price: ${this.props.bid.bid_amount}</span> 
                        <span className="bid-name">Seller Name: {seller.username}</span> 
                    </div>
                </Link>
            )
        }   else {
            return(
                <div></div>
            )
        }
    }
}   

export default BidIndexItem;