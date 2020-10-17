export const fetchProducts = () => {
    return $.ajax({
        url: '/api/products',
        method: 'GET'
    })
}

export const fetchProduct = (productId) => {
    return $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET'
    })
}

export const createProduct = (product) => {
    return $.ajax({
        url: '/api/products',
        method: 'POST',
        data: { product }
    })
}

export const updateProduct = (product) => {
    return $.ajax({
        url: `/api/products/${product.id}`,
        method: "PATCH",
        data: { product }
    })
}

export const deleteProduct = (productId) => {
    return $.ajax({
        url: `/api/products/${productId}`,
        method: "DELETE"
    })
}