import React from "react";
import { Link } from "react-router-dom";

class BidForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bid;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearError = this.clearError.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    componentDidMount() {
        this.props.fetchBids();
    }

    clearError() {
        this.setState({ error: "" });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.productBids.includes(this.props.currentUser.id)) {
            this.setState({ error: "You've already bidded on this item!" });
        } else if (this.state.bid_amount <= this.props.currentMax) {
            this.setState({ error: "Bid amount too low. Bid higher!" });
        } else {
            let bid = {
                bid_amount: this.state.bid_amount,
                bidder_id: this.props.currentUser.id,
                product_id: this.props.productId,
                seller_id: this.props.sellerId,
                productName: this.props.productName,
            };

            this.props.createBid(bid);
            this.setState({
                bid_amount: "",
                error: "",
            });
            this.props.closeModal();
            this.props.fetchBids();
            this.props.history.push("/bids");
        }
    }

    render() {
        const login = (
            <p className="bid-login-first">
                You must be logged in to submit a bid
            </p>
        );

        let currentMax = Object.values(this.props.bids)
            .filter((bid) => bid.seller_id === this.props.sellerId)
            .map((bid) => bid.bid_amount)
            .sort()[0];
        if (!currentMax) return null;
        let submitBid;
        if (this.props.currentUser) {
            submitBid = (
                <div className="create-bid-container">
                    <form className="create-bid-form">
                        <h1 className="form-title">Enter Your Bid</h1>
                        <h1 className="min-bid">
                            Minimum Bid: ${currentMax + 1}
                        </h1>
                        <p className="bid-error">{this.state.error}</p>
                        <input
                            className="bid-amount-input"
                            type="number"
                            min={currentMax + 1}
                            name="bid_amount"
                            onChange={this.update("bid_amount")}
                            placeholder={currentMax}
                            value={this.state.bid_amount}
                        ></input>
                        <button
                            className="bid-submit-button"
                            onClick={this.handleSubmit}
                        >
                            Submit Bid
                        </button>
                    </form>
                </div>
            );
        }
        return this.props.currentUser ? submitBid : login;
    }
}
export default BidForm;
