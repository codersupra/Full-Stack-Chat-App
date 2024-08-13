import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import { connect } from 'mongoose'
import path, { join } from 'path'
import connectoMongoDb from './db/connectToMongoDb.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/userRoute.routes.js'
import cookieParser from 'cookie-parser'
import { app, server } from './socket/socket.js'

dotenv.config()
// const app = express()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();


// console.log("MONGO_DB_URI:", process.env.MONGO_DB_URI);

app.use(express.json()) 
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use('/api/users', userRoutes)

// app.get('/', (req, res)=>{
//     res.send('Hello World')
// })

// app.get('/api/auth/signup', (req,res)=>{
//     console.log("signup route");
// })
// app.get('/api/auth/login', (req,res)=>{
//     console.log("login route");
// })
// app.get('/api/auth/logout', (req,res)=>{
//     console.log("logout route");
// })

/// Instead use middlewares

// app.use("/api/auth",authRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})



server.listen(PORT, ()=>{
    connectoMongoDb();
    console.log(`Success on port-${PORT}`);
})