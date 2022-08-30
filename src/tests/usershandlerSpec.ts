import app from "../server";
import supertest from "supertest";
import {User,UserStore} from "../models/user";

const myrequest=supertest(app);
const myUser=new UserStore();
const tokenSecret=process.env.TOKEN_SECRET as string;
let token:string;
const user:User={id:4,firstname:"moaaz",lastname:"ahmed",password:"123"};

describe('User handler test',()=>{

    it('create method should return status code of 200',async()=>{
        const myresponse=await myrequest.post('/users')
        .send(user);
        token=myresponse.body;
        expect(myresponse.status).toEqual(200);
    })

    it('index method should return status code of 200',async()=>{
        const myresponse=await myrequest.get('/users')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'});;
        expect(myresponse.status).toEqual(200);
    })

    it('show method should return status code of 200',async()=>{
        const myresponse=await myrequest.get('/users/4')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'});
        expect(myresponse.status).toEqual(200);
    })

    it('update method should return status code of 200',async()=>{
        const myresponse=await myrequest.patch('/users/4')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        .send({firsname:'malak'});
        expect(myresponse.status).toEqual(200);
    })

    it('delete method should return status code of 200',async()=>{
        const myresponse=await myrequest.delete('/users/4')
        .set({'Authorization':'Bearer '+token, 'Content-Type': 'application/json'})
        expect(myresponse.status).toEqual(200);
    })
})