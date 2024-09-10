require('dotenv').config();
const express= require ('express')
const app=express();
const authRouter=require("./router/auth-router");
const contactRouter= require("./router/contact-router")
const connectDb=require("./utils/db");
const errorMiddleware= require("./middlewares/error-middleware")
app.use(express.json())

app.use("/", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware)
const port=5000;

connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log("server is running on the port: "+ port)
    })
})

