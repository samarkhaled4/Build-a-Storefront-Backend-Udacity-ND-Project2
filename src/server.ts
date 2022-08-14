import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import ProductsRoute from './handlers/products'
import UsersRoute from './handlers/users'
import OrdersRoute from './handlers/orders'

const app: express.Application = express()
//const address: string = "0.0.0.0:3000"
const port=process.env.PORT;

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

ProductsRoute(app);
UsersRoute(app);
OrdersRoute(app);

app.listen(port, function () {
    console.log(`Server start listening on port: ${port}`);
})