import express from 'express';
import { COOKIE_KEY, MONGO_URI, PORT } from './utils/config';
import mongoose from 'mongoose';
import { injectRoutes } from './routes/routes';
import './middlewares/passport';
import cookieSession from 'cookie-session';
import passport from 'passport';

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;

const app = express();

app.set('view engine', 'ejs');

app.use(
    cookieSession({
        maxAge: ONE_DAY,
        keys: [COOKIE_KEY],
    })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(MONGO_URI);

injectRoutes(app);

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});
