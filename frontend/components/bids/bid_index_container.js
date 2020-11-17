
import { connect } from 'react-redux';
import BidIndex from './bid_index';
import { fetchBids, deleteBid } from '../../actions/bid_actions';

const mapStateToProps = (state) => {
    return {
        bids: Object.values(state.entities.bids),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBids: (bids) => dispatch(fetchBids(bids)),
        deleteBid: (bidId) => dispatch(deleteBid(bidId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BidIndex)