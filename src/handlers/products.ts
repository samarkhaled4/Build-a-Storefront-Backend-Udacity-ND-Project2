import express,{Request,Response} from "express";
import { Product ,ProductStore} from "../models/product";
import verifyAuthToken from "../middlewares/auth";

const myProduct=new ProductStore();

const index = async (_req:Request,res:Response)=>{
    const products= await myProduct.index();
    res.json(products);
}
const show =async (req:Request,res:Response)=>{
    const product= await myProduct.show(req.params.id);
    res.json(product);
}
const create =async (req:Request,res:Response)=>{
    const product:Product={
        //id:req.body.id,
        pname:req.body.pname,
        price:req.body.price
    }
    try{
        const newProduct=await myProduct.create(product);
        res.json(newProduct);
    }
    catch(err){
        res.status(400).json(err);
    }
}
const destroy=async(req:Request,res:Response)=>{
    const product=await myProduct.delete(req.params.id);
    res.json(product);
}
const update=async (req:Request,res:Response)=>{
    //const pID=parseInt(req.params.id);
    try{
        const product=await myProduct.show(req.params.id);
        const updatedProduct=await myProduct.update(product,req.body);
        res.json(updatedProduct);
    }
    catch(err){
        res.json(err)
    }
}
const ProductsRoute =(app:express.Application)=>{
    app.get('/products',index);
    app.get('/products/:id',show);
    app.post('/products',verifyAuthToken,create);
    app.delete('/products/:id',destroy);
    app.patch('/products/:id',update);
}
export default ProductsRoute;