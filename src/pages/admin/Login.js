import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

export default function Login({ history }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            history.push('/dashboard');
        }
    }, [history]);

    const submitHandler = async (event) => {
        event.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const { data } = await axios.post('/api/kmc/login', { username, password }, config);

            localStorage.setItem('authToken', data.token);
            history.push('/dashboard');
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }
    return (
        <Layout>
            <form>
                <input
                    name="username"
                    type="text"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required />
                <input
                    name="password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required />
                <button onClick={submitHandler}>Login</button>
            </form>
            {error && <span>{error}</span>}
        </Layout>
    );
}