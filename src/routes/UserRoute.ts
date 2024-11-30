import { Router } from "express";
import {
    createUser,
    getUserByAccountNumber,
    getUserByIdentityNumber,
    generateTokenController,
} from "../controllers/UserController";
import { authMiddleware } from "../middlewares/AuthMiddleware";

const UserRouter: Router = Router();

UserRouter.post("/users", createUser);
UserRouter.get("/users/account/:accountNumber", authMiddleware, getUserByAccountNumber);
UserRouter.get("/users/identity/:identityNumber", authMiddleware, getUserByIdentityNumber);
UserRouter.post("/auth/token", generateTokenController);

export default UserRouter;
