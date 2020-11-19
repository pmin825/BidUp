import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRating: this.props.currentRating
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.setRating = this.setRating.bind(this);
    this.starClickHandler = this.starClickHandler.bind(this);
  }

  componentDidMount() {
    this.setRating();
  }

  hoverHandler(e) {
    const stars = e.target.parentElement.getElementsByClassName('star');
    const hoverValue = e.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? 'gold' : 'gray';
    });
  };

  setRating(e) {
      const stars = this.refs.rating.getElementsByClassName('star');
      Array.from(stars).forEach(star => {
          star.style.color = this.state.currentRating >= star.dataset.value ? 'gold' : 'gray';
      });
  };

  starClickHandler(e) {
      let rating = e.target.dataset.value;
      this.setState({ currentRating: rating }); 
      if(this.props.onClick){
          this.props.onClick(rating); 
      }
  };

  render() {
    return (
      <div
        className="rating"
        ref="rating"
        data-rating={this.state.currentRating}
        onMouseOut={this.setRating}
      >
        {[...Array(+this.props.numberOfStars).keys()].map(n => {
          return (
            <span
              className="star"
              key={n+1}
              data-value={n+1}
              onMouseOver={this.hoverHandler}
              onClick={this.starClickHandler} 
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
  }
}

export default StarRating;