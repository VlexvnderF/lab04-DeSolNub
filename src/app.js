import express from "express";
import cors from "cors";
import { user, product } from "./components";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/clientes", user);
app.use("/productos", product);
app.use("/",(req, res)=>{
    res.send("Lab4")
});