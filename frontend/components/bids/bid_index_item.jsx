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
            debugger 
            return(
                <div className="bid-container">
                    <span className="bidder-name">Product: {this.props.bid.productName}</span>
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