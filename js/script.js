// Check if cartCounter exists in local storage
if (!localStorage.getItem("cartItems")) {
  localStorage.setItem("cartItems", JSON.stringify([]));
}

// Wait for the window to load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  // Fetch the products from the API
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0N2JlMGRmZmI4YjAwMTQ0MTNiOTYiLCJpYXQiOjE2OTI2OTU1MjEsImV4cCI6MTY5MzkwNTEyMX0.73M6SmuYTdHsoW68z9q32Vhnb83McVN0sUMJY4HtaRQ",
    },
  })
    .then((response) => response.json())
    .then((products) => {
      const productsContainer = document.getElementById("productsContainer");

      // Filter and create the product cards
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("col", "mb-5");
        if (
          product._id === "64e4a998dffb8b0014413c16" ||
          product._id === "64e4c2cfdffb8b0014413c77" ||
          product._id === "64e5b7273aa03f0014204e6a" ||
          product._id === "64e48a60dffb8b0014413bd6"
        ) {
          productCard.innerHTML = `
            <div class="card h-100">
            <!-- Sale badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>
              <a href="product.html?id=${product._id}"><img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" style="margin-top: 3.5rem"></a>
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder"><a  href="product.html?id=${product._id}">${product.name}</a></h5>
                  <!-- Product reviews-->
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  €${product.price}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto addToCartButton" data-id="${product._id}">Add to cart</a>
                </div>
              </div>
            </div>`;
        } else if (
          product._id === "64e4f5dcdffb8b0014413d3c" ||
          product._id === "64e4c599dffb8b0014413c7d" ||
          product._id === "64e4c71ddffb8b0014413c84" ||
          product._id === "64e4c3fadffb8b0014413c7a"
        ) {
          productCard.innerHTML = `
            <div class="card h-100">
            <a href="product.html?id=${product._id}"><img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" style="margin-top: 3.5rem"></a>
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder"><a  href="product.html?id=${product._id}">${product.name}</a></h5>
                  <!-- Product reviews-->
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-half"></div>
                  </div>
                  €${product.price}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto addToCartButton" data-id="${product._id}">Add to cart</a>
                </div>
              </div>
            </div>`;
        } else if (
          product._id === "64e4c793dffb8b0014413c85" ||
          product._id === "64e4c6a3dffb8b0014413c83" ||
          product._id === "64e4d2b6dffb8b0014413caa" ||
          product._id === "64e5b68a3aa03f0014204e69"
        ) {
          productCard.innerHTML = `
            <div class="card h-100">
            <!-- Sale badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>
              <a href="product.html?id=${product._id}"><img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" style="margin-top: 3.5rem"></a>
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder"><a  href="product.html?id=${product._id}">${product.name}</a></h5>
                  <!-- Product reviews-->
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  €${product.price}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto addToCartButton" data-id="${product._id}">Add to cart</a>
                </div>
              </div>
            </div>`;
        } else {
          productCard.innerHTML = `
          <div class="card h-100">
          <!-- New item badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                New
              </div>
              <a href="product.html?id=${product._id}"><img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" style="margin-top: 3.5rem"></a>
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder"><a href="product.html?id=${product._id}">${product.name}</a></h5>
                €${product.price}
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto addToCartButton" data-id="${product._id}">Add to cart</a>
              </div>
            </div>
          </div>`;
        }
        productCard
          .querySelector(".addToCartButton")
          .addEventListener("click", addToCart);

        productsContainer.appendChild(productCard);
        loader.style.display = "none";
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  // Add to cart function
  function addToCart() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productId = this.dataset.id;

    cartItems.push(productId);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    updateCartCounter();
  }

  // Update cart counter
  function updateCartCounter() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const cartCounterElement = document.querySelector(".cartItemsCount");
    cartCounterElement.textContent = cartItems.length;
  }

  // Initialize cart counter
  updateCartCounter();
});

const button = document.querySelector(".btn.btn-outline-dark");
button.addEventListener("click", () => {
  window.location.href = "cart.html";
});
