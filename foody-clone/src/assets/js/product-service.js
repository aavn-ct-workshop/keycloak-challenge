const productService = {
    getProductById,
    getProducts
};

function getProducts() {
    return DEFAULT_PRODUCTS;
}

function getProductById(id) {
    return DEFAULT_PRODUCTS.find(product => product.id == id);
}

const DEFAULT_PRODUCTS = [
    { id: 1, name: "Airpods", price: "199", img: "airpods.jpg", desc: "Airpords detail" },
    { id: 2, name: "Air Jordans", price: "125", img: "air-jordans.jpg", desc: "Air Jordans detail" },
    { id: 3, name: "Smartphone", price: "699", img: "smartphone.jpg", desc: "Smartphone detail" }
]

export default productService