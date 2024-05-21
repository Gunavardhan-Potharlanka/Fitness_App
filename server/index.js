import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRoutes from './routers/User.js'
const app = express()
app.use(cors())
dotenv.config()
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true}))
app.use('/api/user', UserRoutes)
const startServer = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL).then((res)=>{
            console.log("Connected to MongoDB")
            app.listen(6969, () => console.log('Listening at 6969 port'))
        }).catch((err)=> console.log(err))
    }catch(err){
        console.log(err)
    }
}
startServer();