import { Request, Response } from "express";
import UserModel, { IUser } from "../models/UserModel";
import { generateToken } from "../utils/JwtUtil";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser = new UserModel(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getUserByAccountNumber = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserModel.findOne({ accountNumber: req.params.accountNumber });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserByIdentityNumber = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserModel.findOne({ identityNumber: req.params.identityNumber });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const generateTokenController = (req: Request, res: Response): void => {
    const { userName, emailAddress } = req.body;
    const token = generateToken({ userName, emailAddress });
    res.json({ token });
};
