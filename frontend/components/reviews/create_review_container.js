import { connect } from "react-redux";
import RatingForm from "./rating_form";
import { createReview } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        scoreRating: {
            feedback: "",
            rating: 0,
            reviewer_id: "",
            reviewee_id: "",
            reviewer_name: "",
        },
        currentUser: state.entities.users[state.session.id],
        sellerId: state.entities.products.seller_id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RatingForm)
);
