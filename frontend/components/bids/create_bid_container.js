import { connect } from "react-redux";
import BidForm from "./bid_form";
import { createBid } from "../../actions/bid_actions";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { fetchBids } from "../../actions/bid_actions";

const mapStateToProps = (state, ownProps) => {
    let currentMax = Object.values(state.entities.bids)
        .filter((bid) => bid.seller_id === state.entities.products.seller_id)
        .map((bid) => bid.bid_amount)
        .sort()[0];
    let productBids = Object.values(state.entities.bids)
        .filter((bid) => bid.seller_id === state.entities.products.seller_id)
        .map((bid) => bid.bidder_id);
    return {
        currentMax,
        productBids,
        bids: state.entities.bids,
        bid: {
            bid_amount: "",
            bidder_id: "",
            product_id: "",
            seller_id: "",
            productName: "",
            error: "",
        },
        sellerId: state.entities.products.seller_id,
        productId: state.entities.products.id,
        currentUser: state.entities.users[state.session.id],
        productName: state.entities.products.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBid: (bid) => dispatch(createBid(bid)),
        closeModal: () => dispatch(closeModal()),
        fetchBids: () => dispatch(fetchBids()),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BidForm)
);
