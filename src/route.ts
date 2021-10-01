import express from 'express';
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from './middleware/ensureAdmin';
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagController';
import { ListUserController } from './controllers/ListUsersController';





const router = express.Router();

const listUsersController = new ListUserController();
const listTagController = new ListTagsController();
const listUserReceiverComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated ,ensureAdmin ,createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments",ensureAuthenticated, complimentController.handle);

router.get("/users", ensureAuthenticated, ensureAdmin, listUsersController.handle);
router.get("/users/compliments/send",ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",ensureAuthenticated,listUserReceiverComplimentsController.handle );
router.get("/tags", ensureAuthenticated, listTagController.handle);

export { router };