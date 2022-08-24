import {User,UserStore} from "../models/user"
import bcrypt from "bcrypt";

/*const {SALT_ROUNDS,BCRYPT_PASSWORD}=process.env
const pepper=BCRYPT_PASSWORD;
const saltRounds=SALT_ROUNDS as string;
const hash=bcrypt.hashSync('123'+pepper,parseInt(saltRounds))*/

const user=new UserStore();

describe ("User Model Test",()=>{
    it('should have an index method',()=>{
        expect(user.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(user.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(user.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(user.update).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(user.delete).toBeDefined();
    });

    it('create method should add a user', async () => {
        const result = await user.create({
            id:1,
            firstname:'samar',
            lastname:'khaled',
            password:'123'
        });
        expect(result).toEqual({
            id: 1,
            firstname:'samar',
            lastname:'khaled',
            password:result.password
        });
    });
    it('index method should return an array of users',async()=>{
        const result=await user.index();
        expect(result).toEqual([{
            id: 1,
            firstname:'samar',
            lastname:'khaled',
            password:result[0].password
          }]);
    });
      
    it('show method should return the correct user', async () => {
        const result = await user.show("1");
        expect(result).toEqual({
          id: 1,
          firstname:'samar',
          lastname:'khaled',
          password:result.password
        });
    });
    
    it('update method should update user',async()=>{
        const myproduct=await user.show("1");
        const values={"lastname":'kasem'};
        const updated=await user.update(myproduct,values);
        expect(updated).toEqual({
            id:1,
            firstname:'samar',
            lastname:'kasem',
            password:myproduct.password
        })
    });
    
    it('delete method should remove the user', async () => {
        await user.delete("1");
        const result = await user.index()
        expect(result).toEqual([]);
    }) 
})
