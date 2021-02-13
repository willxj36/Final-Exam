import * as React from 'react';
import { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { Book } from '../../utils/models';
import { Link } from 'react-router-dom';

const BookList = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        (async () => {
            let url = '/api/books'
            let books = await apiService(url);
            setBooks(books);
        })();
    }, []);

    // useEffect(() => {}, []);

    return(
        <div>
            {books.map(book => (
                <div className="card" key={book.id}>
                    <h3 className="card-title">{book.title}</h3>
                    <h5 className="card-subtitle">{book.author}</h5>
                    <p className="card-text">${book.price}</p>
                    <p className="card-text">{book.category}</p>
                    <Link to={`/books/${book.id}`} className="btn btn-primary">View Details</Link>
                </div>
            ))}
        </div>
    )

}

export default BookList;