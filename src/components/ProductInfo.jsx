const ProductInfo = () => {
    const product = {
        "name": "Wireless Headphones",
        "price": 99.99,
        "description": "High-quality wireless headphones with noise cancellation.",
        "availability": "In Stock"
    };
    return (
        <div class="container mx-auto p-4 border rounded shadow-md mt-4">
            <h2 class="display-6">Product: {product.name}</h2>
            <p class="display-6"> Price:${product.price}</p>
            <p class="display-6">Description: {product.description}</p>
            <p class="display-6">Availability: {product.availability}</p>
        </div>
    );
}
export default ProductInfo;