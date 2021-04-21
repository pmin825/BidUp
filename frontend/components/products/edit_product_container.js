import { connect } from "react-redux";
import {
    fetchProduct,
    updateProduct,
    deleteProduct,
    updateProduct2,
    clearProductErrors,
} from "../../actions/product_actions";
import EditProductForm from "./edit_product_form";

const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.products;
    let defaultProduct = {
        name: "",
        price: "",
        description: "",
        location: "",
        seller_id: state.session.id,
        photoFile: null,
        photoValue: "",
    };

    let product = state.entities.products || defaultProduct;
    return {
        errors: errors,
        product,
        formType: "update",
        currentUser: state.session.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        updateProduct: (product) => dispatch(updateProduct(product)),
        deleteProduct: (productId) => dispatch(deleteProduct(productId)),
        updateProduct2: (product) => dispatch(updateProduct2(product)),
        clearProductErrors: () => dispatch(clearProductErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);
