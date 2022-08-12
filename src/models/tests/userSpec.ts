import {User,UserStore} from "../user"

const user=new UserStore();

describe ("User Model Test",()=>{
    it('should have an index method',()=>{
        expect(user.index).toBeDefined();
    });
    it('return an array of users',async()=>{
        const res=await user.index();
        expect(res).toEqual([]);
    })
})
