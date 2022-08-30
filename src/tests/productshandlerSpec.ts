import app from "../server";
import supertest from "supertest";
import {User,UserStore} from "../models/user";
import jwt from "jsonwebtoken";

const myrequest=supertest(app);
const myUser=new UserStore();
const tokenSecret=process.env.TOKEN_SECRET as string;
let token:string;

describe('Product handler test',()=>{
    beforeAll(async()=>{
        const user:User={firstname:"ahmed",lastname:"header",password:"123"};
        const addeduser=await myUser.create(user);
        token= jwt.sign({user:addeduser},tokenSecret) 
    })

    it('create method should return status code of 200',async()=>{
        const myresponse=await myrequest.post('/products')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        .send({pname:"sock",price:5});
        expect(myresponse.status).toEqual(200);
    })

    it('index method should return status code of 200',async()=>{
        const myresponse=await myrequest.get('/products');
        expect(myresponse.status).toEqual(200);
    })

    it('show method should return status code of 200',async()=>{
        const myresponse=await myrequest.get('/products/3');
        expect(myresponse.status).toEqual(200);
    })

    it('update method should return status code of 200',async()=>{
        const myresponse=await myrequest.patch('/products/3')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        .send({price:3});
        expect(myresponse.status).toEqual(200);
    })

    it('delete method should return status code of 200',async()=>{
        const myresponse=await myrequest.delete('/products/3')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        expect(myresponse.status).toEqual(200);
    })
})