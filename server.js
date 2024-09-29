import connectDB from "./Config/database.js";
import userRoute from "./routes/userRoute.js";

const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000;
app.use("/api/v1/user",userRoute); 

app.use(express.json())


server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot 5000`);
});