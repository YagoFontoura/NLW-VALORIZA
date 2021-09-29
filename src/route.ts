const express = require('express');
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from './middleware/ensureAdmin';



const router = express.Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin ,createTagController.handle);

export { router };