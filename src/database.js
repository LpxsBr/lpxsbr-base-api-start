import { configDotenv } from "dotenv";
import { createConnection } from "mysql";

configDotenv();

class Database {
    database    = null;
    username    = null;
    password    = null;
    host        = null;
    post        = null;

    constructor(){
        
        this.database   = process.env.DATABASE
        this.username   = process.env.USERNAME
        this.password   = process.env.PASSWORD
        this.host       = process.env.HOST
        this.post       = process.env.POST

    }

    createConnection(){
        return createConnection({
            user:       this.username ,
            password:   this.password ,
            host:       this.host     ,
            database:   this.database
        })
    }

    query(query = '', args = {}){
        const con = this.createConnection()
        const result = con.query(query, args)
        con.end();

        return result;
    }
}

export default Database;