import { Application } from "express";
import authRoute from "./authRoute";
import profileRoutes from "./profileRoutes";

export const injectRoutes = (app: Application) => {
    app.get('/', (req, res) => {
        res.render('index', { user: req.user });
    });
    app.use('/auth', authRoute);
    app.use('/profile', profileRoutes);
}