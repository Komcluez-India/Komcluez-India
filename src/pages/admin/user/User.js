import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/DashboardLayout';
import { Link } from 'react-router-dom';
import Styles from '../../../styles/admin/model.module.css'

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
    }, [authToken])
    return (
        <DashboardLayout>
            {users.map((eachUser) => (
                <div key={eachUser.id} className={Styles.modelItem}>
                    <Link to={`/dashboard/user/${eachUser.id}`}><span>{eachUser.username}</span></Link>
                    <div>
                        <Link to={`/dashboard/user/${eachUser.id}`}>
                            <button className={'btn' + ' btn-success'}>
                                Edit
                            </button>
                        </Link>
                        <Link to={`/dashboard/user/${eachUser.id}`}>
                            <button className={'btn' + ' btn-danger'}>
                                Delete
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </DashboardLayout>
    );
}