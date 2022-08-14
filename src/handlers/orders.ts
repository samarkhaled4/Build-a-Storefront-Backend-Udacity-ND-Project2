import express,{Request,Response} from "express";
import { Order,OrderStore } from "../models/order";

const myOrder=new OrderStore();

const show =async (req:Request,res:Response)=>{
    const product= await myOrder.show(parseInt(req.params.id));
    res.json(product);
}

const OrdersRoute = (app:express.Application)=>{
    app.get('/orders/:id',show);
}
export default OrdersRoute;