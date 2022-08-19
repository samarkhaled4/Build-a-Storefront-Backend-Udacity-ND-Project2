import {User,UserStore} from "../models/user"

const user=new UserStore();

describe ("User Model Test",()=>{
    it('should have an index method',()=>{
        expect(user.index).toBeDefined();
    });
    it('should return an array of users',async()=>{
        const res=await user.index();
        expect(res).toEqual([]);
    })
})
