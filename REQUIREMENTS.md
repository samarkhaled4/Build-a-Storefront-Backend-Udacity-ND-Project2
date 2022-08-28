# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
Here are the Crud operations need for our route and also needed http verbs needs for these operations :
> Note: if mentioned that [token required] so you need to send the jwt string (that you received in body of the responce while creating a new user) in HEADERS with key-value of {Authorization:Bearer jwtstring}.

#### Products
- Index 
- Show
- Create [token required]

* for example here an index function to get all products from our database 
  * const index = async (_req:Request,res:Response)=>{
    const products= await myProduct.index();
    res.json(products);
}

* and finally this is the ProductsRoute
  * const ProductsRoute =(app:express.Application)=>{
    app.get('/products',index);
    app.get('/products/:id',show);
    app.post('/products',verifyAuthToken,create);
    app.delete('/products/:id',verifyAuthToken,destroy);
    app.patch('/products/:id',verifyAuthToken,update);
}
#### Users
- Index [token required]
- Show [token required]
- Create 

* UsersRoute is shown as follows :
  * const UsersRoute =(app:express.Application)=>{
    app.get('/users',verifyAuthToken,index);
    app.get('/users/:id',show);
    app.post('/users',create);
    app.delete('/users/:id',verifyAuthToken,destroy);
    app.patch('/users/:id',verifyAuthToken,update)
}

#### Orders
- Index
- Show > Current Order by user (args: user id)[token required]
- Delete

* OrdersRoute is shown as foolows : 
  * const OrdersRoute = (app:express.Application)=>{
    app.get('/orders',index);
    app.get('/orders/:id',verifyAuthToken,show);
    app.post('/orders',verifyAuthToken,create);
    app.post('/orders/:id/products',verifyAuthToken,addProduct);
    app.delete('/orders/:id',verifyAuthToken,destroy)
}
  

## Data Shapes for database schema are as follows :
#### Products
* products (id SERIAL PRIMARY KEY, pname VARCHAR(70), price FLOAT).

#### Users
* users (id SERIAL PRIMARY KEY,firstname VARCHAR(50),lastname VARCHAR(50),password VARCHAR(70)).

#### Orders
* orders (id SERIAL PRIMARY KEY,status VARCHAR(50),user_id INTEGER REFERENCES users(id)).

#### Order_Products
* order_products (id SERIAL PRIMARY KEY,order_id INTEGER REFERENCES orders(id),product_id INTEGER REFERENCES products(id),quantity INTEGER).
