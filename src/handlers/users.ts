import express,{Request,Response} from "express";
import { User,UserStore } from "../models/user";

const myUser=new UserStore();

const index = async (_req:Request,res:Response)=>{
    const users= await myUser.index();
    res.json(users);
}
const show =async (req:Request,res:Response)=>{
    const user= await myUser.show(req.body.id);
    res.json(user);
}
const create =async (req:Request,res:Response)=>{
    try{
        const addUser:User={
            id:req.body.id,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            password:req.body.password
        }
        const newUser=await myUser.create(addUser);
        res.json(newUser);
    }
    catch(err){
        res.status(400).json(err);
    }
}
const UsersRoute =(app:express.Application)=>{
    app.get('/users',index);
    app.get('/users/:id',show);
    app.post('/users',create)
}
export default UsersRoute;