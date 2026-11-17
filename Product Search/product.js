const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 },
    { name: "Headphones", price: 80 }
];

const searchInput = document.querySelector("#searchInput");
const productList = document.querySelector("#productList");

function renderProducts(items) {

    productList.innerHTML = "";

    items.forEach(function(product) {

        const productElement = document.createElement("p");

        productElement.textContent =
            `${product.name} - $${product.price}`;

        productList.append(productElement);

    });
}

renderProducts(products);

searchInput.addEventListener("input", function() {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {

        return product.name.toLowerCase().includes(searchTerm);

    });

    renderProducts(filteredProducts);

});