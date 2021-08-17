import React from 'react'

export default function DashboardLayout({ children }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
            minWidth: '100vw',
        }}>
            {children}
        </div>
    );
}