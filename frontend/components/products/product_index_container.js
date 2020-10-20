import { connect } from 'react-redux';
import { fetchProducts, deleteProduct, unmountProduct } from '../../actions/product_actions';
import ProductIndex from './product_index';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        deleteProduct: (productId) => dispatch(deleteProduct(productId)),
        unmountProduct: () => dispatch(unmountProduct())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);