import express,{Request,Response} from "express";
import { Product ,ProductStore} from "../models/product";

const myProduct=new ProductStore();

const index = async (_req:Request,res:Response)=>{
    const products= await myProduct.index();
    res.json(products);
}
const show =async (req:Request,res:Response)=>{
    const product= await myProduct.show(req.body.id);
    res.json(product);
}
const create =async (req:Request,res:Response)=>{
    try{
        const product:Product={
            id:req.body.id,
            name:req.body.name,
            price:req.body.price
        }
        const newProduct=await myProduct.create(product);
        res.json(newProduct);
    }
    catch(err){
        res.status(400).json(err);
    }
}
const ProductsRoute =(app:express.Application)=>{
    app.get('/products',index);
    app.get('/products/:id',show);
    app.post('/products',create)
}
export default ProductsRoute;