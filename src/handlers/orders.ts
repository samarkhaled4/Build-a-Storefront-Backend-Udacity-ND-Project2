import express,{Request,Response} from "express";
import { Order,OrderStore } from "../models/order";

const myOrder=new OrderStore();

const index=async(_req:Request,res:Response)=>{
    const orders=await myOrder.index();
    res.json(orders);
}
const show =async (req:Request,res:Response)=>{
    const order= await myOrder.show(req.params.id);
    res.json(order);
}
const create=async(req:Request,res:Response)=>{
    const order:Order={
        user_id:req.body.user_id,
        status:req.body.status
    }
    try{
        const newOrder=await myOrder.create(order);
        res.json(newOrder);
    }
    catch(err){
        res.status(400).json(err);
    }
}
const addProduct=async(req:Request,res:Response)=>{
    const orderId:string=req.params.id;
    const productId:string=req.body.id;
    const quantity:number=parseInt(req.body.quatity);
    try{
        const addedProduct=await myOrder.addProduct(quantity,productId,orderId);
        res.json(addedProduct);
    }
    catch(err){
        res.status(400).json(err);
    }
}
const OrdersRoute = (app:express.Application)=>{
    app.get('/orders',index);
    app.get('/orders/:id',show);
    app.post('/orders',create);
    app.post('/orders/:id/products',addProduct)
}
export default OrdersRoute;