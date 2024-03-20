import { connect } from "http2";
import app from "./app.js";
import { connectionToDatabase } from "./db/connection.js";

//connections and listeners
const PORT = process.env.PORT||8000;
connectionToDatabase().then(()=>{
  app.listen(PORT,()=>{
    console.log("Server running connected to database on port "+ PORT);
  })
}).catch(err=>console.log(err));

