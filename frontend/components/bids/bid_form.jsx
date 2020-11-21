import React from 'react';
import { Link } from 'react-router-dom';

class BidForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.bid;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let bid = { bid_amount: this.state.bid_amount, bidder_id: this.props.currentUser.id, product_id: this.props.productId, seller_id: this.props.sellerId, productName: this.props.productName }
        
        this.props.createBid(bid);
        this.setState({
            bid_amount: "",
        });
        this.props.closeModal();
        this.props.fetchBids();
        this.props.history.push("/bids");
        // alert('Your Bid as been successfully submitted')
    }

    render() {
        const login = (
            <p className="bid-login-first">You must be logged in to submit a bid</p>
        )

        let submitBid;
        if (this.props.currentUser) {
            submitBid = (
                <div className="create-bid-container">
                    <form className="create-bid-form">
                        <h1 className="form-title">Enter Your Bid</h1>
                        <input className="bid-amount-input" type="number" min="1" name="bid_amount" placeholder="0" onChange={this.update("bid_amount")} value={this.state.bid_amount} />
                        <button className="bid-submit-button" onClick={this.handleSubmit}>Submit Bid</button>
                    </form>
                </div>
            )
        }
        return (
          this.props.currentUser ? submitBid : login
        )
    }
}
export default BidForm;