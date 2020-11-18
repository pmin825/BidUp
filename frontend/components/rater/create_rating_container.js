
import { connect } from "react-redux";
import RatingForm from "./rating_form";
// import { createRating } from "../../actions/";
import { closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from "react-router-dom"

const mapStateToProps = (state, ownProps) => {
    
    return ({
        scoreRating: {
            name: "",
            review: "",
            rating: 0,
            seller_id: "",
            rater_id: ""
        },
        currentUser: state.entities.users[state.session.id],
        sellerId: state.entities.products.seller_id,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createRating: (rating) => dispatch(createRating(rating)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        closeModal: () => dispatch(closeModal()),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RatingForm))