import * as express from 'express';
import db from '../../db';

const router = express.Router();

// index router.use('/path', pathRouter)

router.get('/:id', /*middleware?*/ async (req, res) => { //all other methods same, just change router.method
    try {
        let userid = Number(req.params.id);
        let response = await db.Tokens.deleter(userid);
        req.logout();
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;