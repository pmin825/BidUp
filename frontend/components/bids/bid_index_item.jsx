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
        // debugger 
        if (this.props.bid.seller_id === this.props.currentUser.id) {
            return(
                <div className="bid-container">
                    <span className="bidder-name">From: {seller.username}</span>
                    <span className="bidder-amount">Bid Amount: {this.props.bid.bid_amount}</span>  
                </div>
            )
        }   else if (this.props.bid.seller_id === this.props.currentUser.id) {
            return(
                <div className="bid-container">
                    <span className="bidder-name">From: {seller.username}</span>
                    <span className="bidder-amount">Bid Amount: {this.props.bid.bid_amount}</span>  
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