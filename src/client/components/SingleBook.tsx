import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import apiService, { User } from '../../utils/apiService';
import { Book } from '../../utils/models';

const SingleBook = () => {

    const history = useHistory();

    const { id } = useParams<{id: string}>();

    const [book, setBook] = useState<Book>(null);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        User.role === 'admin' ? setLoggedIn(true) : setLoggedIn(false) ;
    }, [])

    useEffect(() => {
        (async () => {
            let url = `/api/books/${id}`;
            let book = await apiService(url);
            setBook(book);
        })();
    }, [id]);

    const handleDelete = async () => {
        let url = `/api/books/${id}`
        let res = await apiService(url, 'DELETE');
        res ? alert('deleted') : alert('failed');
        history.push('/books');
    }

    if(book) {return(
        <div>
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
            <h5>{book.price}</h5>
            <h5>{book.category}</h5>
            { loggedIn ? (
                <>
                    <Link to={`/books/${book.id}/update`} className="btn btn-warning">Edit Info</Link>
                    <button onClick={handleDelete} className="btn btn-danger">Delete Book Info</button>
                </>
            ) : null }
        </div>
    )} else {
        return null;
    }

}

export default SingleBook;