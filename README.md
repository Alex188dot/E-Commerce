# E-Commerce

Digital Dojo is a consumer electronics E-Commerce store where customers can buy gadgets like laptops, smartphones, videogames, etc...

Tech stack used for this project: HTML, CSS, Bootstrap, Javascript, RESTful APIs with CRUD methods, MongoDB for the backend hosted on https://striveschool-api.herokuapp.com/.

# Front-end

Digital Dojo can be accessed by any device (fully responsive) by clicking on the following link: https://alex188dot.github.io/E-Commerce/ 

The website will display all the available products, that are fetched directly from the database. 

<img width="2216" alt="Homepage" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/58921952-ecd4-4a06-9eec-193d769e3828">

By clicking on each product, the user will be able to see more details like a full description and a larger image (this is obtained with only one product.html page, by using query strings). 

<img width="2223" alt="Screenshot 2023-08-25 at 09 56 35" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/19909cdf-feb5-498a-9525-853c56892d08">

Furthermore the user will be able to add each product to a cart, through the Add to cart button, which can be found either in the homepage or in the product.html page. 
By leveraging the use of local storage the cart progress is not lost and can be carried with ease through the different webpages, so that when the user decides to 
proceed to payment, they can click on the top right of the screen and they will be redirected to the cart summary. If the cart is empty the user will find this message:

<img width="2204" alt="Screenshot 2023-08-25 at 15 56 59" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/6e280431-9838-4c0b-9cb9-1cc633ca0df3">

On the other hand, if there are items in the cart, a summary like the one below will be displayed:

<img width="2230" alt="Screenshot 2023-08-25 at 09 57 54" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/51288a45-eadb-4ec0-a7fe-d596e6cad513">

Here they will be able to see the total, remove items and proceed to payment. If they click on the button the following message will appear:

<p align="center">
  <img width="475" alt="Screenshot 2023-08-25 at 10 43 50" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/f1a742eb-71a6-41e4-b23a-03c3241fa632">
</p>

# Back-end

By clicking on the top right of the homepage, on Admin Login, the admin will be able to sign into a private area where they will be able to communicate with the database. To access this part use: Admin01 (username) and 01 (password):

<img width="2212" alt="Admin_login" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/9aea4bb0-f8ee-4baa-9e18-cf2cb980a968">

Once succesfully logged in, the admin will be able to add, update, search and remove a product. Success or error messages will be displayed every time an action is performed. 

<img width="2204" alt="Admin_area" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/86a90422-53ba-4d89-a75e-19202b884784">

a) Example of adding a product. The admin inserts all the info in the form (all are required) for an Xbox Controller:

<p align="center">
  <img width="356" alt="Screenshot 2023-08-25 at 10 00 33" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/37e66c5d-c5c4-41c0-b32e-7d00d2a1508a">
</p>

By going back to the homepage we will be able to see that the product has been successfully added also on the front-end:

<p align="center">
  <img width="330" alt="Screenshot 2023-08-26 at 10 27 16" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/7df15639-c1be-4f9f-8b7b-a7b30dc51e67">
</p>

b) Example of updating a product. Let's say the admin wants to change the image for this product: by specifying only the ID (mandatory) and the new image the system will update the imageurl both on the server side and the client side. 

<p align="center">
  <img width="325" alt="Screenshot 2023-08-25 at 10 14 49" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/e57d7989-8c85-43c1-9fc4-3bfc74b0bf23">
</p>

Hence the front-end will now show the new image:

<p align="center">
  <img width="328" alt="Screenshot 2023-08-26 at 10 28 42" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/da5fe09b-ab1d-403b-bc65-312fb7b4070f">
</p>

c) Example of searching a product. Let's say the admin needs to get the ID of an item quickly, for instance the Xbox, they can just type in the name of the product, and the system will return all the items in the db, matching that query:

<p align="center">
  <img width="338" alt="Screenshot 2023-08-25 at 10 13 46" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/879e5e9b-2a80-4670-ae96-b224a573ec1e">
</p>

d) Example of deleting a product. Let's say the admin needs to delete a product because it is no longer available, they can do so just by inserting the ID in the relative field and click on the Delete Product button:

<p align="center">
  <img width="350" alt="Screenshot 2023-08-25 at 10 15 39" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/0ab87309-6439-4792-a75c-c31aa4db0849">
</p>

A confirmation message will be displayed and the product will disappear from the front-end:
<p align="center">
  <img width="326" alt="Screenshot 2023-08-25 at 10 16 08" src="https://github.com/Alex188dot/E-Commerce/assets/117444853/2ebe13df-7461-4211-90e7-bb2bcdc9204b">
</p>
