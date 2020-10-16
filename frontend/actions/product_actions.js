import * as ProductAPIUtil from '../util/products_api_util'

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
})

export const receiveProducts = () => dispatch => {
    ProductAPIUtil.fetchProducts() 
        .then(payload => dispatch(receiveProducts(payload)))
}

export const receiveProduct = (productId) => dispatch => {
    ProductAPIUtil.fetchProduct(productId) 
        .then(payload => dispatch(receiveProduct(payload)))
}

export const createProduct = (product) => dispatch => (
    ProductAPIUtil.createProduct(product)
        .then(payload => dispatch(receiveProduct(payload)))
)

export const updateProduct = (product) => dispatch => (
    ProductAPIUtil.updateProduct(product) 
        .then(payload => dispatch(receiveProduct(payload)))
)

export const deleteProduct = (productId) => dispatch => (
    ProductAPIUtil.deleteProduct(productId)
        .then(() => dispatch(removeProduct(productId)))
)