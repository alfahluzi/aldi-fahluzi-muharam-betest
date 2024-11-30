import Jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SCRT!;

export const generateToken = (payload: object): string => {
    return Jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
    });
};

export const verifyToken = (token: string): object | string => {
    return Jwt.verify(token, JWT_SECRET);
};
