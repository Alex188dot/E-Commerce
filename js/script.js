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

const addToCartButtons = document.querySelectorAll(".addToCartButton");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
function addToCart() {
  cartCounter++;
  cartTotal += parseFloat(this.dataset.price);

  updateCartCounter();
  updateCartTotal();
  localStorage.setItem("cartCounter", cartCounter);
}
function updateCartCounter() {
  const cartCounterElement = document.querySelector(".cartItemsCount");
  cartCounterElement.textContent = cartCounter;
}

function updateCartTotal() {
  console.log(cartTotal);
}

function checkCartCounter() {
  const cartCounterElement = document.querySelector(".cartItemsCount");
  const cartCounter = localStorage.getItem("cartCounter");
  cartCounterElement.textContent = cartCounter;
}

window.onload = function () {
  checkCartCounter();
};
