import React from 'react';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let sellerRatings = this.props.sellerReview.map(review => review.rating);
        let activeStars = [];
        for(let i = 0; i < this.props.review.rating; i++) {
            activeStars.push(<span key={i} className="fa fa-star active"></span>)
        }
        let inactiveCount = 5 - this.props.review.rating
        let inactiveStars = [];
        for (let i = 0; i < inactiveCount; i++) {
            inactiveStars.push(<span key={i} className="fa fa-star"></span>)
        }
        return (
            <div>
                <div className="star-rating">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    {activeStars.map((star) => (star))}
                    {inactiveStars.map((star) => (star))}
                </div>
                <p>Reviewer: {this.props.review.reviewer_name}</p>
                <p>{this.props.review.feedback}</p>
            </div>
        )
    }
}

export default ReviewIndexItem;