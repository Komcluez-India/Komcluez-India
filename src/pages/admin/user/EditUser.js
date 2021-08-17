import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboardLayout';

export default function EditUser({ history, authtoken: authToken, match: { params: { id } } }) {

    const [username, setUsername] = useState('');
    const [validTill, setValidTill] = useState(Date.now());



    useEffect(() => {
        const fetchUser = async (config) => {
            const { data } = await axios.get(`http://localhost:5050/api/kmc/users/${id}`, config);
            const user = JSON.parse(data.user);
            const date = new Date(user.validTill);
            setUsername(user.username);
            setValidTill(((new Date(date - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 16)));
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            }
        }
        fetchUser(config);
    }, [id, authToken])

    const updateUser = async (event) => {
        event.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            }
        }
        const { data } = await axios.put(`http://localhost:5050/api/kmc/users/${id}`, { username, validTill }, config);
        console.log(data);
    }
    return (
        <DashboardLayout>
            <form>
                <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input
                    name="validTill"
                    type="datetime-local"
                    value={validTill}
                    onChange={(e) => setValidTill(e.target.value)} />
                <button onClick={updateUser}>Update</button>
            </form>
        </DashboardLayout>
    );
}