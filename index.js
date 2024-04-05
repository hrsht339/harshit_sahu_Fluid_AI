const express = require("express");
const { userRouter } = require("./routes/signup.route")
const { connection } = require("./configs/db.js");
const { taskRouter } = require("./routes/tasks.route.js");

const app = express();

app.use(express.json())


app.use("/", userRouter)

app.use("/", taskRouter)


app.listen(4500,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server connected")
})