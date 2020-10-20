
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = state => {
    return {
        product: { 
            name: "", 
            price: "", 
            description: "", 
            location: "", 
            seller_id: state.session.id,
            photoFile: null,
        },
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (product) => dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)