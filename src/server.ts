import 'reflect-metadata'; 
import express from 'express';
import "./database";
import { router } from  "./route";
import bp from 'body-parser';

const app = express();
const port = 3000;

app.use
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(router);





app.listen(port , () => console.log("Server is running"));
