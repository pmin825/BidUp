import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SearchBar from './searchbar';
import { fetchProducts } from '../../actions/product_actions'

const mSTP = (state, ownProps) => {
    return {
        products: Object.values(state.entities.products),
        product: state.entities.products[ownProps.match.params.productId]
    }
};

const mDTP = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default withRouter(connect(mSTP, mDTP)(SearchBar))