import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/JwtUtil";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: "Auth Header Request!" });
        return;
    }

    const token = authHeader.split(" ")[1];
    try {
        req.body.user = verifyToken(token);
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token!" });
    }
};
