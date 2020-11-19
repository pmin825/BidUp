import { connect } from 'react-redux';
import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import { fetchUsers } from '../../actions/user_actions';
import ProductShow from './product_show';
import { openModal } from '../../actions/modal_actions';

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
    // let users = state.entities.users[state.entities.products.seller_id].username
    let users = state.entities.users 
    let reviews = state.entities.reviews

    return {
        product,
        currentUser,
        users,
        reviews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (productId) => {
            return dispatch(fetchProduct(productId))
        },
        deleteProduct: (productId) => {
            return dispatch(deleteProduct(productId))
        },
        openModal: modal => {
            return dispatch(openModal(modal))
        },
        fetchUsers: () => {
            return dispatch(fetchUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)