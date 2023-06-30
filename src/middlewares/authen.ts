import { NextFunction, Request, Response } from "express";

export const checkAuthentication = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
};
