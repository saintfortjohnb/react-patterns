import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './Color.css';

function Color({ colors }) {
    const { color } = useParams();
    const currentColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());
    console.log(color);
    console.log(currentColor);
    
    if (!currentColor) {
        return <Navigate to="/colors" />;
    }

    return (
        <div style={{ backgroundColor: currentColor.value, height: '100vh', width: '100vw' }}>
            <h1>This is {color}.</h1>
            <h2>Isn't it beautiful?</h2>
            <Link to="/colors">← Go Back to Colors List</Link>
        </div>
    );
}

export default Color;
