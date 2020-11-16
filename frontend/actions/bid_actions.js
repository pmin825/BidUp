import * as BidApiUtil from '../util/bids_api_util'

export const RECEIVE_BID = 'RECEIVE_BID';
export const REMOVE_BID = 'REMOVE_BID';

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