# Build-a-Storefront-Backend-Udacity-ND-Project2
This is a simple storeFront Backend project to have products in a store and by adding user , the user can create orders and add products to these orders.
***
## Get Started
#### First : install and setup needed database variables
* you need to install postgresql or use docker instead of this.
  * You then need to edit these values in **.env** file with whatt you have when setup database.
     * PORT (which Node project built on), POSTGRES_HOST , POSTGRES_USER , POSTGRES_PASSWORD , POSTGRES_PORT.
  * You can then create a database which name in **.env** file with variable name of **POSTGRES_DB**.
#### Second : setup node project
* You can start node project by cloning existing project here in this repo 
* Then you need to run `npm install` to get needed packages.
* You need also run `db-migrate up` to run migrations onto your database .
#### Third : you need tool like postman to connect to your app on address `http://localhost:3000`.
* You can db multiple things on postman to get and add data to the database as follows :
> Note when you dd new user you will get a jwt string in responce's body which you need to send with header authorization prameter when you need to gget some data , 
 (I refer here data to product or user or order).
  * get >> to get all data.
  * get/:id >> get info about specific product or user or order.
  * post >> add a data.
  * patch/id  >> edit info about specific data.
  * delete/:id >> delete a specific data
