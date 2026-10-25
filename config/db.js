import mongoose from "mongoose"
const connectDB = async()=>{
    try
    {
        const connection = await mongoose.connect("mongodb://chaitalipardeshi78_db_user:io4aQGe9k9E8PN7s@ac-dicxzxm-shard-00-00.d2rdx6f.mongodb.net:27017,ac-dicxzxm-shard-00-01.d2rdx6f.mongodb.net:27017,ac-dicxzxm-shard-00-02.d2rdx6f.mongodb.net:27017/cold-mailer?ssl=true&replicaSet=atlas-z0v8gr-shard-0&authSource=admin")
        console.log("MongoDB Connected")
    }
    catch(e)
    {
        console.log(e.message)

    }
    
}
export default connectDB;