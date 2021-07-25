import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../../components/Layout';
import { Link } from 'react-router-dom';

export default function User({ authtoken: authToken }) {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (config) => {
        const { data } = await axios.get('http://localhost:5050/api/kmc/users/', config);
        setUsers(JSON.parse(data.users));
    }
    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            }
        }
        fetchUsers(config);
    }, [])
    return (
        <DashboardLayout>
            {users.map((eachUser) => (
                <div>
                    <Link to={`/dashboard/user/${eachUser.id}`}><span>{eachUser.username}</span></Link>

                </div>
            ))}
        </DashboardLayout>
    );
}