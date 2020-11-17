export const fetchBids = () => {
    debugger 
    return $.ajax({
        url: '/api/bids',
        method: 'GET'
    })
}

export const fetchBid = (bidId) => {
    return $.ajax({
        url: `/api/bids/${bidId}`,
        method: 'GET'
    })
}

export const createBid = (bid) => {
    return $.ajax({
        url: '/api/bids',
        method: 'POST',
        data: {bid}
    })
}

export const deleteBid = (bidId) => {
    return $.ajax({
        url: `/api/bids/${bidId}`,
        method: 'DELETE'
    })
}