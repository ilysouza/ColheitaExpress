const ProductContainer = document.querySelector(".produtos-lista");
const isProductDetailPage = document.querySelector(".produto-detalhe");

if (ProductContainer) {
    displayProducts();
} else if (isProductDetailPage) {
    displayProductDetail();
}

function displayProducts() {
    products.forEach(product => {
        const ProductCard = document.createElement("div");
        ProductCard.classList.add("product-card");
        ProductCard.innerHTML = `
            <div class="img-box">
                <img src="${product.image}">
            </div>
            <h2 class="title">${product.title}</h2>
            <span class="price">${product.price} ${product.category}</span>
        `;
        ProductContainer.appendChild(ProductCard);

        const imgBox = ProductCard.querySelector(".img-box");
        imgBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "produto-detalhe.html"
        })
    });
}

function displayProductDetail() {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"));

    const titleEl = document.querySelector(".title");
    const priceEl = document.querySelector(".price");
    const descriptionEl = document.querySelector(".description");
    const imageContainer = document.querySelector(".image");
    const addToCartBtn = document.querySelector(".add-cartbtn");
    const producerEl = document.querySelector(".detailVen");
    const localEl = document.querySelector(".detailLoc");

    if (productData.image) {
        imageContainer.innerHTML = `<img src="${productData.image}" alt="${productData.title}">`;
    }

    titleEl.textContent = productData.title;
    priceEl.textContent = productData.price;
    descriptionEl.textContent = productData.description;
    producerEl.textContent = productData.detailVen;
    localEl.textContent = productData.detailLoc;

    updateProductDisplay(selectedColor);

    addToCartBtn.addEventListener("click", () => {
        addToCartBtn(productData)
    });
}