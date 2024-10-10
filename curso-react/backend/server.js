import express  from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./Config/db.js";
import itemRoutes from "./Routes/item.route.js";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", itemRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
})

const PORT = process.env.PORT || 5000;

connectDB().then(() =>{
    
    app.listen(PORT, () =>{
        console.log(`server is running on port 5000 ${PORT}.`);
    })

})
