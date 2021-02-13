import * as express from 'express';
import { createToken } from '../../../utils/security/tokens';
import { hashPass } from '../../../utils/security/passwords';
import db from '../../db';

const router = express.Router();

// index router.use('/path', pathRouter)

router.post('/', /*middleware?*/ async (req, res) => { //all other methods same, just change router.method
    try {
        let user = req.body;
        let hash = hashPass(user.password);
        user.password = hash;
        let response: any = await db.Users.post(user);
        let token = await createToken({ userid: response.insertId })
        res.json({
            token,
            role: 'admin',
            userid: response.insertId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;