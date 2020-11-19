import React from 'react';
import StarRating from './star_rating';

class RatingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.scoreRating
        this.setRating = this.setRating.bind(this);
        this.handleReview = this.handleReview.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    setRating(rating) {
        this.setState({ rating: rating });
    };

    handleReview(e) {
        e.preventDefault();
        let review = { rating: this.state.rating, feedback: this.state.feedback, reviewer_id: this.props.currentUser.id, reviewee_id: this.props.sellerId}
        this.props.createReview(review);
        this.props.closeModal();
    }

    render() {
      return (
        <div className="rating-form">
          <div className="form-input">
            <label>Feedback:</label>
            <textarea
              onChange={this.update('feedback')}
            />
          </div>
          <div className="form-input rating">
            <label htmlFor="rating">Rating:</label>
            <StarRating
              numberOfStars="5"
              currentRating="0"
              onClick={this.setRating}
            />
          </div>
          <div className="actions">
            <button type="submit" onClick={this.handleReview}>
              Submit Rating
            </button>
          </div>
        </div>
      );
    }
}


export default RatingForm;