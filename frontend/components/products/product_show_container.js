import { connect } from 'react-redux';
import { fetchProduct, updateProduct, deleteProduct } from '../../actions/product_actions';
import ProductShow from './product_show';

const mapStateToProps = (state, ownProps) => {
    let defaultProduct =  {
        name: "", 
        price: "", 
        description: "", 
        location: "", 
        seller_id: state.session.id,
        photoFile: null,
    };

    let product = state.entities.products || defaultProduct 
    let currentUser = state.session.id 

    return {
        product,
        currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (productId) => {
            return dispatch(fetchProduct(productId))
        },
        deleteProduct: (productId) => {
            return dispatch(deleteProduct(productId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)