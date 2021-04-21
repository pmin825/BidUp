import React from "react";
import StarRating from "./star_rating";

class RatingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.scoreRating;
        this.setRating = this.setRating.bind(this);
        this.handleReview = this.handleReview.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    setRating(rating) {
        this.setState({ rating: rating });
    }

    handleReview(e) {
        e.preventDefault();
        let review = {
            rating: this.state.rating,
            feedback: this.state.feedback,
            reviewer_id: this.props.currentUser.id,
            reviewee_id: this.props.sellerId,
            reviewer_name: this.props.currentUser.username,
        };
        this.props.createReview(review);
        this.props.closeModal();
    }

    render() {
        const login = (
            <p className="bid-login-first">
                You must be logged in to submit a review
            </p>
        );

        let submitReview;
        if (this.props.currentUser) {
            submitReview = (
                <div className="rating-form">
                    <div className="form-input">
                        <p>Please rate and leave the seller feedback!</p>
                        <textarea
                            placeholder="Write your feedback here, and rate the seller below."
                            onChange={this.update("feedback")}
                        />
                    </div>
                    <div className="form-input rating">
                        <StarRating
                            numberOfStars="5"
                            currentRating="0"
                            onClick={this.setRating}
                        />
                    </div>
                    <div className="actions">
                        <button type="submit" onClick={this.handleReview}>
                            Submit Review
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.currentUser ? submitReview : login;
    }
}

export default RatingForm;
