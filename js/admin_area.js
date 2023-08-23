const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0N2JlMGRmZmI4YjAwMTQ0MTNiOTYiLCJpYXQiOjE2OTI2OTU1MjEsImV4cCI6MTY5MzkwNTEyMX0.73M6SmuYTdHsoW68z9q32Vhnb83McVN0sUMJY4HtaRQ";

function addProduct(event) {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("price").value;
  const addForm = document.getElementById("addProductForm");

  // Create the product object
  const product = {
    name,
    description,
    brand,
    imageUrl,
    price,
  };

  // Send a POST request to add the product
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authToken,
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Product added:", data);

      // create a p element under the add button and display the success message
      const p = document.createElement("p");
      p.textContent = `Product ${data.name} with ID ${data._id} added!`;
      addForm.appendChild(p);

      // Clear the form
      addForm.reset();
    })
    .catch((error) => {
      console.error("Error adding product:", error);

      // create a p element under the add button and display the error message
      const p = document.createElement("p");
      p.textContent = "Error adding product!";
      addForm.appendChild(p);

      // Clear the form
      addForm.reset();
    });
}

function deleteProduct(event) {
  event.preventDefault();

  // Get the product ID to delete
  const productId = document.getElementById("productId").value;
  const deleteForm = document.getElementById("deleteProductForm");

  // Send a DELETE request to remove the product
  fetch(apiUrl + productId, {
    method: "DELETE",
    headers: {
      Authorization: authToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Product deleted:", data);
      // create a p element under the delete button and display the success message
      const p = document.createElement("p");
      p.textContent = `Product ${data.name} with ID ${data._id} deleted!`;
      deleteForm.appendChild(p);

      // Clear the form
      deleteForm.reset();
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
      // create a p element under the delete button and display the error message
      const p = document.createElement("p");
      p.textContent = "Error deleting product!";
      deleteForm.appendChild(p);

      // Clear the form
      deleteForm.reset();
    });
}

async function updateProduct(event) {
  event.preventDefault();

  const updateForm = document.getElementById("updateProductForm");

  const productId = document.getElementById("updateProductId").value;

  const updateFields = {};

  // Get the values of the input fields
  const name = document.getElementById("updateName").value;
  const description = document.getElementById("updateDescription").value;
  const brand = document.getElementById("updateBrand").value;
  const imageUrl = document.getElementById("updateImageUrl").value;
  const price = document.getElementById("updatePrice").value;

  // Add the non-empty fields to the updateFields object
  if (name) updateFields.name = name;
  if (description) updateFields.description = description;
  if (brand) updateFields.brand = brand;
  if (imageUrl) updateFields.imageUrl = imageUrl;
  if (price) updateFields.price = price;

  // Make the API request to update the product
  try {
    const response = await fetch(apiUrl + productId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(updateFields),
    });

    if (response.ok) {
      // create a p element under the update button and display the success message
      const p = document.createElement("p");
      p.textContent = `Product ${name} with ID ${productId} updated!`;
      updateForm.appendChild(p);

      // Clear the form
      updateForm.reset();
    } else {
      // create a p element under the update button and display the error message
      const p = document.createElement("p");
      p.textContent = "Error updating the product!";
      updateForm.appendChild(p);

      // Clear the form
      updateForm.reset();
    }
  } catch (error) {
    // create a p element under the update button and display the error message
    const p = document.createElement("p");
    p.textContent = `Error updating the product! ${error}`;
    updateForm.appendChild(p);

    // Clear the form
    updateForm.reset();
  }
}
async function searchProduct(event) {
  event.preventDefault();

  // Get the input value
  const productName = document
    .getElementById("productName")
    .value.toLowerCase();

  // Perform the search operation
  const productDetailsElement = document.getElementById("productDetails");
  productDetailsElement.textContent = "Searching...";

  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        Authorization: authToken,
      },
    });

    if (response.ok) {
      const products = await response.json();

      if (products.length > 0) {
        const matchingProducts = products.filter((product) =>
          product.name.toLowerCase().includes(productName)
        );

        if (matchingProducts.length > 0) {
          const productDetails = matchingProducts
            .map(
              ({ name, description, brand, imageUrl, price }) =>
                `Name: ${name}, Description: ${description}, Brand: ${brand}, ImageUrl: ${imageUrl}, Price: ${price}`
            )
            .join("\n");
          productDetailsElement.textContent = productDetails;
        } else {
          productDetailsElement.textContent = "No products found";
        }
      } else {
        productDetailsElement.textContent = "No products found";
      }
    } else {
      productDetailsElement.textContent =
        "Error occurred while searching for the products";
    }
  } catch (error) {
    console.error(error);
    productDetailsElement.textContent =
      "Error occurred while searching for the products";
  }
}
