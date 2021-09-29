import 'reflect-metadata'; 
import  express, { Request, Response, NextFunction } from 'express';
require("express-async-errors");
import { router } from  "./route";

import bp from 'body-parser';
import "./database";

const app = express();
const port = 3000;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        })
    }

    return response.status(500).json({
        status:"error",
        message: "Internal Server Error"
    })
})





app.listen(port , () => console.log("Server is running"));
