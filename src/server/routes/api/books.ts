import * as express from 'express';

const router = express.Router();

router.get('/:id?', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        if(id) {
            res.json({message: 'test success'});
        } else {
            res.status(200).json({message: 'test success'});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;