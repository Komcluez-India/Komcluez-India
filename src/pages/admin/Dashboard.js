import React from 'react'
import DashboardLayout from '../../components/Layout'

export default function Dashboard({ history }) {
    return (
        <DashboardLayout>
            <div onClick={() => history.push('/dashboard/user')}>
                Users
            </div>
        </DashboardLayout>
    );
}