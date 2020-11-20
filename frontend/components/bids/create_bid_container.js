import { connect } from 'react-redux'
import BidForm from './bid_form';
import { createBid } from '../../actions/bid_actions'
import {withRouter} from 'react-router-dom'
import {closeModal} from '../../actions/modal_actions';
import {fetchBids} from '../../actions/bid_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        bid: {
            bid_amount: "",
            bidder_id: "",
            product_id: "",
            seller_id: "",
            productName: "",
        },
        sellerId: state.entities.products.seller_id,
        productId: state.entities.products.id, 
        currentUser: state.entities.users[state.session.id],
        productName: state.entities.products.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBid: (bid) => dispatch(createBid(bid)),
        closeModal: () => dispatch(closeModal()),
        fetchBids: () => dispatch(fetchBids())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BidForm))