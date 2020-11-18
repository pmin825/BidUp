import React from 'react';
import StarRating from './star_rating';

class RatingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.scoreRating
    }

    componentDidMount(){
        this.props.fetchUser()
    }


    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    setRating(rating) {
        this.setState({ rating: rating });
    };


    render() {
      return (
        <div className="rating-form">
          <div className="heading">Rate User!</div>
          <div className="form-input">
            <label htmlFor="name">Seller:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.update}
            />
          </div>
          <div className="form-input">
            <label htmlFor="review">Review:</label>
            <textarea
              name="review"
              id="review"
              onChange={this.update}
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
            <button type="submit" onClick={this.saveRating}>
              Submit Rating
            </button>
          </div>
        </div>
      );
    }
}


export default (RatingForm);