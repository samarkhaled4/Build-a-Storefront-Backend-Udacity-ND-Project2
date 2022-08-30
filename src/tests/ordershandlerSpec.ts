import app from "../server";
import supertest from "supertest";
import {User,UserStore} from "../models/user";
import {Product,ProductStore} from "../models/product";
import jwt from "jsonwebtoken";

const myrequest=supertest(app);
const myUser=new UserStore();
const myProduct=new ProductStore();
const tokenSecret=process.env.TOKEN_SECRET as string;
let token:string;

describe('Order handler test',()=>{
    beforeAll(async()=>{
        const user:User={firstname:"mohamed",lastname:"ahmed",password:"123"};
        const product:Product={pname:'shoes',price:90};
        await myProduct.create(product);
        const addeduser=await myUser.create(user);
        token= jwt.sign({user:addeduser},tokenSecret) 
    })

    it('create method should return status code of 200',async()=>{
        const myresponse=await myrequest.post('/orders')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        .send({status:"active",user_id:1});
        expect(myresponse.status).toEqual(200);
    })

    it('index method should return status code of 200',async()=>{
        const myresponse=await myrequest.get('/orders')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'});
        expect(myresponse.status).toEqual(200);
    })

    it('show method should return status code of 200',async()=>{
        const myresponse=await myrequest.get('/orders/1')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'});
        expect(myresponse.status).toEqual(200);
    })

    it('addProduct method should return status code of 200',async()=>{
        const myresponse=await myrequest.post('/orders/1/products')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        .send({product_id:1,quantity:2});
        expect(myresponse.status).toEqual(200);
    })

    it('delete method should return status code of 200',async()=>{
        const myresponse=await myrequest.delete('/orders/1')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        expect(myresponse.status).toEqual(200);
    })
})