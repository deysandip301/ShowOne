import React from 'react';

const NotAuthorized = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
            <h1 style={{ color: '#dc3545', fontSize: '3rem' }}>Not Authorized</h1>
            <p style={{ color: '#6c757d', fontSize: '1.5rem' }}>You do not have permission to access this page.</p>
        </div>
    );
};

export default NotAuthorized;