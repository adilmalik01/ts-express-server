import express, { Request, Response } from "express"


const app = express()


app.get("/", (req: Request, res: Response) => {
    res.json("this is typescript server")
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`YOUR SERVER RUNING ON ${PORT}`);
})