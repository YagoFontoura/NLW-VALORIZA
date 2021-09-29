const express = require('express');
import { CreateUserController } from "./controllers/CreateUserController";


const router = express.Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);


export { router };