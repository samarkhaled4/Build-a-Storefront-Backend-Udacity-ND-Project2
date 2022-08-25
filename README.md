# Build-a-Storefront-Backend-Udacity-ND-Project2
This is a simple storeFront Backend project to have products in a store and by adding user , the user can create orders and add products to these orders.
***
## Get Started
#### First : install and setup needed database variables
* you need to install postgresql or use docker instead of this.
  * You then need to edit these values in **.env** file with whatt you have when setup database.
     * PORT (which Node project built on), POSTGRES_HOST , POSTGRES_USER , POSTGRES_PASSWORD , POSTGRES_PORT .
  * You can then create a database which name in **.env** file with variable name of **POSTGRES_DB** .
#### Second : setup node project
* You can start node project by cloning existing project here in this repo 
* Then you need to run `npm install` to get needed packages.
* You need also run `db-migrate up` to run migrations onto your database .
#### Third : you need tool like postman to connect to your app on address `http://localhost:3000` 



   
