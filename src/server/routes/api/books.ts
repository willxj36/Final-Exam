import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:id?', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        if(id) {
            let [book] = await db.Books.getOne('id', id);
            res.json(book);
        } else {
            let books = await db.Books.getAll();
            res.status(200).json(books);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.post('/', async (req, res) => { //all other methods same, just change router.method
    try {
        let book = req.body;
        let response = await db.Books.post(book);
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.put('/:id', async (req, res) => { //all other methods same, just change router.method
    try {
        let book = req.body
        let id = Number(req.params.id);
        let response = await db.Books.put(book, id);
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.delete('/:id', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        let response = await db.Books.deleter(id);
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;