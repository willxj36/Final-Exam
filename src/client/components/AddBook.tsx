import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import apiService, { User } from '../../utils/apiService';

const AddBook = () => {

    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<[]>([]);
    
    useEffect(() => {
        User.role === 'admin' ? null : history.replace('/login');
    }, []);

    useEffect(() => {
        (async () => {
            let urlCat = '/api/categories';
            let categories = await apiService(urlCat);
            setCategories(categories);
        })();
    }, []);


    const handleNewBook = async () => {
        let url = '/api/books';
        let res = await apiService(url, 'POST', {
            title,
            author,
            category,
            price
        })
        res ? alert('success') : alert('failure');
        history.push('/books');
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
                <option value="default">-- Select Category (req'd) --</option>
                {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <button onClick={handleNewBook} className="btn-primary btn">Submit New Book</button>
        </div>
    )

}

export default AddBook;