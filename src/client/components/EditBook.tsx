import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import apiService, { User } from '../../utils/apiService';
import { Book } from '../../utils/models';

const EditBook = () => {

    const { id } = useParams<{id: string}>();

    const history = useHistory();

    const [book, setBook] = useState<Book>();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<[]>([]);

    useEffect(() => {
        (async () => {
            let url = `/api/books/${id}`
            let book = await apiService(url);
            setBook(book);

            let urlCat = `/api/categories`;
            let categories = await apiService(urlCat);
            setCategories(categories);
        })();
    }, [id]);

    useEffect(() => {
        setTitle(book?.title);
        setAuthor(book?.author);
        setCategory(book?.category);
        setPrice(book?.price);
    }, [book]);

    useEffect(() => {
        User.role === 'admin' ? null : history.replace('/login');
    }, []);

    const handleEdit = async () => {
        let url = `/api/books/${id}`;
        let res = await apiService(url, 'PUT', {
            title,
            author,
            category,
            price
        })
        res ? alert('success') : alert('failure');
        history.push(`/books/${id}`);
    }

    return(
        <div>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} type="text" name="title" id="title"/>
            <label htmlFor="author">Author</label>
            <input value={author} onChange={(e) => setAuthor(e.currentTarget.value)} type="text" name="author" id="author"/>
            <label htmlFor="price">Price</label>
            <input value={price} onChange={(e) => setPrice(Number(e.currentTarget.value))} type="text" name="price" id="price"/>
            <label htmlFor="category">Category</label>
            <select value={category} onChange={(e) => setCategory(e.currentTarget.value)} name="category" id="category">
                <option value={category}>{category}</option>
                {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <button onClick={handleEdit} className="btn-primary btn">Submit Edit</button>
        </div>
    )

}

export default EditBook;