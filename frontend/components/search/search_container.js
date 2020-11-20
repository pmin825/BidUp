import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SearchIndex from './search_index';
import { fetchProducts } from '../../actions/product_actions'

const mSTP = (state, ownProps) => {
    return {
        products: Object.values(state.entities.products),
    }
};

const mDTP = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default withRouter(connect(mSTP, mDTP)(SearchIndex))