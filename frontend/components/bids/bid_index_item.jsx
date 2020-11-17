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

        if (this.props.bid.bidder_id === this.props.currentUser.id) {
            return(
                <div className="bid-container">
                    <span className="bidder-name">From: {bidder.username}</span>
                    <span className="bidder-amount">Bid Amount: {this.props.bid.bid_amount}</span>  
                </div>
            )
        }   else {
            return (
                <div></div>
            )
        }
    }
}   

export default BidIndexItem;