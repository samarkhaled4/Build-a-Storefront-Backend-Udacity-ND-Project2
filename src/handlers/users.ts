import express,{Request,Response} from "express";
import { User,UserStore } from "../models/user";
import jwt,{JwtPayload} from "jsonwebtoken";
import verifyAuthToken from "../middlewares/auth";

const myUser=new UserStore();
const tokenSecret=process.env.TOKEN_SECRET as string;
const index = async (_req:Request,res:Response)=>{
    const users= await myUser.index();
    res.json(users);
}
const show =async (req:Request,res:Response)=>{
    try{
        const auth=req.headers.authorization as string;
        const token=auth.split(' ')[1]
        const decoded=jwt.verify(token,tokenSecret) as JwtPayload;
        console.log(decoded)
        if(decoded.addUser.id===parseInt(req.params.id)){
            const user= await myUser.show(req.params.id);
            res.json(user);
        }
        else{
            res.json('Not Authorized to get info with this ID !');
            return
        }
    }
    catch(err){
        res.status(401);
        res.json(`Unauthorized , Invalid token ${err}`);
    }
}
const create =async (req:Request,res:Response)=>{
    const addUser:User={
        //id:req.body.id,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    }
    try{
        const newUser=await myUser.create(addUser);
        var token=jwt.sign({addUser:newUser}, tokenSecret);
        res.json(token);
    }
    catch(err){
        res.status(400).json(err);
    }
}
const destroy=async(req:Request,res:Response)=>{
    const user=await myUser.delete(req.params.id);
    res.json(user);
}
const update=async (req:Request,res:Response)=>{
    //const pID=parseInt(req.params.id);
    try{
        const user=await myUser.show(req.params.id);
        const updatedUSer=await myUser.update(user,req.body);
        res.json(updatedUSer);
    }
    catch(err){
        res.json(err)
    }
}
const UsersRoute =(app:express.Application)=>{
    app.get('/users',verifyAuthToken,index);
    app.get('/users/:id',show);
    app.post('/users',create);
    app.delete('/users/:id',destroy);
    app.patch('/users/:id',update)
}
export default UsersRoute;