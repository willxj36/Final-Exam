import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { register, AccessToken } from '../../utils/apiService';

const Register = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const history = useHistory();

    useEffect(() => {
        AccessToken ? history.replace('/books') : null ;
    }, []);

    const handleRegister = async () => {
        await register(name, email, password);
        history.push('/books');
    }

    return(
        <div>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="name" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" id="password"/>
            <button onClick={handleRegister} className="btn-primary btn">Register</button>
        </div>
    )

}

export default Register;