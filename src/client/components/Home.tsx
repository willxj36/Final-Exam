import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/apiService';

const Home = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        let token = localStorage.getItem('token');
        token ? setLoggedIn(true) : setLoggedIn(false);
    }, []);

    const handleLogout = async () => {
        let res = await logout();
        res ? alert('logged out') : alert('logout fail');
        location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="display-1">Welcome to the Bookstore!</h1>
            </div>
            <div className="row">
                { loggedIn ? <button onClick={handleLogout} className="btn btn-lg btn-warning">Log Out</button> : <Link to='/login' className="btn btn-lg btn-primary">Log In</Link> }
            </div>
        </div>
    )

}

export default Home;