import * as BidApiUtil from '../util/bids_api_util'

export const RECEIVE_BIDS = 'RECEIVE_BIDS'
export const RECEIVE_BID = 'RECEIVE_BID';
export const REMOVE_BID = 'REMOVE_BID';

const receiveBids = bids => {
    return {
        type: RECEIVE_BIDS,
        bids 
    }
}

const receiveBid = bid => {
    return {
        type: RECEIVE_BID,
        bid
    }
}

const removeBid = bidId => {
    return {
        type: REMOVE_BID,
        bidId
    }
}

export const fetchBids = () => dispatch => {
    return BidApiUtil.fetchBids() 
        .then(payload => dispatch(receiveBids(payload)))
}

export const fetchBid = (productId) => dispatch => {
    return BidApiUtil.fetchBid(productId) 
        .then(payload => dispatch(receiveProduct(payload)))
}

export const createBid = (bid) => {
    return (dispatch) => {
        return BidApiUtil.createBid(bid).then((payload) => {
            dispatch(receiveBid(payload))
        })
    }
}

export const deleteBid = (bidId) => {
    return (dispatch) => {
        return BidApiUtil.deleteBid(bidId).then(() => {
            dispatch(removeBid(bidId))
        })
    }
}