//Solo rutas
import { Router } from "express";
import { user } from "..";
import * as Controller from "./controller";


//contact
const userRouter = Router();
userRouter.route("/").get(Controller.findAll);

export default userRouter;