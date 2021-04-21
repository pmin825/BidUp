import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    createProduct,
    clearProductErrors,
} from "../../actions/product_actions";
import ProductForm from "./product_form";

const mapStateToProps = (state) => {
    let errors = state.errors.products;
    return {
        errors: errors,
        product: {
            name: "",
            price: "",
            description: "",
            location: "",
            seller_id: state.session.id,
            photoFile: null,
            photoError: "",
        },
        formType: "create",
        currentUser: state.session.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (product) => dispatch(createProduct(product)),
        clearProductErrors: () => dispatch(clearProductErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
