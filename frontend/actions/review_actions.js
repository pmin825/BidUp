import * as ReviewApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => {
    return{
        type: RECEIVE_REVIEW,
        review 
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const createReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.createReview(review).then((payload) => {
            dispatch(receiveReview(payload))
        })
    }
}


export const deleteReview = (reviewId) => {
    return (dispatch) => {
        return ReviewApiUtil.deleteReview(reviewId).then(() => {
            dispatch(removeReview(reviewId))
        })
    }
}