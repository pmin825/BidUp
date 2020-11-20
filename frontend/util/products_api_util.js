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
        data: 
            product,
            contentType: false,
            processData: false 
    })
}

export const updateProduct = (product) => {

    return $.ajax({
        url: `api/products/${product.get('product[id]')}`,
        method: "PATCH",
        data: product,
        contentType: false,
        processData: false
    })
}

export const updateProduct2 = (product) => {
    return $.ajax({
        url: `api/products/${product.id}`,
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

export const fetchSearchProducts = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/products/search',
        data: { query: query}
            
    })
)