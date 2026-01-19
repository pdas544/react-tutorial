const ProductInfo = () => {
    const product = {
        "name": "Wireless Headphones",
        "price": 99.99,
        "description": "High-quality wireless headphones with noise cancellation.",
        "availability": "In Stock"
    };
    return (
        <div className="container mx-auto p-4 border rounded shadow-md mt-4">
            <h2 ><span className="display-6">Product:</span> {product.name}</h2>
            <h2> <span className="display-6">Price:$</span>{product.price}</h2>
            <h2><span className="display-6">Description: </span>{product.description}</h2>
            <h2><span className="display-6">Availability: </span>{product.availability}</h2>
        </div>
    );
}
export default ProductInfo;