import { connect } from 'react-redux'
import SearchBar from './searchbar'
import { fetchSearchProducts } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
    fetchSearchProducts: searchQuery => dispatch(fetchSearchProducts(searchQuery)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));