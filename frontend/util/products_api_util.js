export const fetchProducts = () => (
    $.ajax({
        url: '/api/products',
        method: 'GET'
    })
)

export const fetchProduct = (productId) => (
    $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET'
    })
)

export const createProduct = (product) => (
    $.ajax({
        url: '/api/products',
        method: 'POST',
        data: { product }
    })
)

export const updateProduct = (product) => (
    $.ajax({
        method: "PATCH",
        url: `/api/products/${product.id}`,
        data: { product }
    })
)

export const deleteProduct = (productId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}`
    })
)