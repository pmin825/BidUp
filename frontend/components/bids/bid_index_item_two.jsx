import React from 'react';

class BidIndexItemTwo extends React.Component{
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

        debugger

        if (this.props.bid.seller_id === this.props.currentUser.id) {
            return(
                <div className="bid-container">
                    <span className="bid-product">Product: {this.props.bid.productName}</span>
                    <span className="bid-amount">Asking Bid: ${this.props.bid.bid_amount}</span>  
                    <span className="bid-name">Bidder Name: {bidder.username}</span>
                </div>
            )
        }   else {
            return(
                <div></div>
            )
        }
    }
}   

export default BidIndexItemTwo;