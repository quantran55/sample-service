import express from 'express';
import { checkAuthentication } from '../middlewares/authen';

const router = express.Router();

router.get('/', checkAuthentication, (req, res) => {
    res.render('profile', { user: req.user });
});

export default router;