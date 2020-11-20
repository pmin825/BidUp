import * as ProductAPIUtil from '../util/products_api_util'

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UNMOUNT_PRODUCT = "UNMOUNT_PRODUCT";

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
})


export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchProducts() 
        .then(payload => dispatch(receiveProducts(payload)))
}

export const fetchProduct = (productId) => dispatch => {
    return ProductAPIUtil.fetchProduct(productId) 
        .then(payload => dispatch(receiveProduct(payload)))
}

export const createProduct = (product) => dispatch => {
    return ProductAPIUtil.createProduct(product)
        .then(payload => dispatch(receiveProduct(payload)))
}

export const updateProduct = (product) => dispatch => {
    return ProductAPIUtil.updateProduct(product) 
        .then(payload => dispatch(receiveProduct(payload)))
}

export const updateProduct2 = (product) => dispatch => {
    return ProductAPIUtil.updateProduct2(product) 
        .then(payload => dispatch(receiveProduct(payload)))
}

export const deleteProduct = (productId) => dispatch => {
    return ProductAPIUtil.deleteProduct(productId)
        .then(() => dispatch(removeProduct(productId)))
}

export const fetchSearchProducts = (query) => dispatch => {
    return ProductAPIUtil.fetchSearchProducts(query)
        .then(payload => dispatch(receiveProducts(payload)))
           
}