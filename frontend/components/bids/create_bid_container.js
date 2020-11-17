import { connect } from 'react-redux'
import BidForm from './bid_form';
import { createBid } from '../../actions/bid_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        bid: {
            bid_amount: "",
            bidder_id: "",
            product_id: "",
        },
        productId: state.entities.products.id, 
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBid: (bid) => dispatch(createBid(bid))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BidForm))