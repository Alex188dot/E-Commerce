fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0N2JlMGRmZmI4YjAwMTQ0MTNiOTYiLCJpYXQiOjE2OTI2OTU1MjEsImV4cCI6MTY5MzkwNTEyMX0.73M6SmuYTdHsoW68z9q32Vhnb83McVN0sUMJY4HtaRQ",
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the data here
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error);
  });
let cartCounter = 0;
let cartTotal = 0;

// Check if cartCounter exists in local storage
if (localStorage.getItem("cartCounter")) {
  cartCounter = parseInt(localStorage.getItem("cartCounter"));
}

// Wait for the window to load
window.addEventListener("load", () => {
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
        productCard.innerHTML = `
            <div class="card h-100">
              <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" style="margin-top: 3.5rem">
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder"><a data-productId="${product._id}" href="product.html?id=${product._id}">${product.name}</a></h5>
                  €${product.price}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto addToCartButton" data-price="${product.price}">Add to cart</a>
                </div>
              </div>
            </div>
          `;

        productCard
          .querySelector(".addToCartButton")
          .addEventListener("click", addToCart);

        productsContainer.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  // Add to cart function
  function addToCart() {
    cartCounter++;

    updateCartCounter();
    localStorage.setItem("cartCounter", cartCounter);
  }

  // Update cart counter
  function updateCartCounter() {
    const cartCounterElement = document.querySelector(".cartItemsCount");
    cartCounterElement.textContent = cartCounter;
  }

  // Initialize cart counter
  updateCartCounter();
});

const button = document.querySelector(".btn.btn-outline-dark");
button.addEventListener("click", () => {
  window.location.href = "cart.html";
});
