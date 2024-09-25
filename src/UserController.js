import Database from "./database.js";

class User extends Database{
    constructor(){
        super('createConnection')
    }

    create(req, res, next){

        try {
            
            let sql = 'INSERT INTO USERS (NAME, PASSWORD, STATUS) VALUES (:name, :password, :status)';

            console.log(req.body);

            const {name, password} = req?.body
            

            if(!name){
                throw new Error('Name is required!')
            }

            if(!password){
                throw new Error('Password is required!')
            }
            
            
            let args = {
                name    : name     ,
                password: password ,
                status  : 1,
            }


            let insertion = this.query(sql, args)

            return res.status(201).json({
                message: 'user created!',
                user: insertion
            })
        } catch (error) {
            return res.status(500).json({
                message: 'some error ocurred!',
                detail: error.message,
                user: {}
            }) 
        }

    }

    getAll(){

    }
}

export default new User