
import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Created server from newly generated terms"
    })
})

app.post("/", async (req, res) => {
    await client.user.create({
        data: {
            email: req.body.email,
            name: req.body.name
        }
    })

    res.json({
        message: "signing up!"
    })
})

app.listen(3000);