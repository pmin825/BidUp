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