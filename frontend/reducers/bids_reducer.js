import { RECEIVE_BIDS, RECEIVE_BID, REMOVE_BID } from "../actions/bid_actions";

const bidsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BIDS:
            return action.bids;
        case RECEIVE_BID:
            nextState[action.bid.id] = action.bid;
            return nextState;
        case REMOVE_BID:
            delete nextState[action.bidId];
            return nextState;
        default:
            return state;
    }
};

export default bidsReducer;
