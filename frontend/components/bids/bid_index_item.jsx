import React from 'react';

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
    
        if (this.props.bid.bidder_id === this.props.currentUser.id) {
            return(
                <div className="bid-container">
                    <span className="bid-product">Product: {this.props.bid.productName}</span>
                    <span className="bid-amount">Bid Price: ${this.props.bid.bid_amount}</span> 
                    <span className="bid-name">Seller Name: {seller.username}</span> 
                </div>
            )
        }   else {
            return(
                <div></div>
            )
        }
    }
}   

export default BidIndexItem;