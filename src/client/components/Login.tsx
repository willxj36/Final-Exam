import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { login, AccessToken } from '../../utils/apiService';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const history = useHistory();

    useEffect(() => {
        AccessToken ? history.replace('/books') : null ;
    }, []);

    const handleLogin = async () => {
        await login(email, password);
        history.push('/books');
    }

    return(
        <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" id="password"/>
            <button onClick={handleLogin} className="btn-primary btn">Log In!</button>
            <Link to='/register' className="btn btn-secondary">New? Register Here</Link>
        </div>
    )

}

export default Login;