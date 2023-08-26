import React from 'react';
import { Link } from 'react-router-dom';

function ColorsList({ colors }) {
    const clearLocalStorage = () => {
        localStorage.removeItem('colors');
        window.location.reload(); // Refresh the page to show the initial colors
    };

    return (
        <div className='container'>
            <h1>Welcome to the color factory.</h1>
            <Link to="/colors/new">Add a color</Link>
            <ul>
                {colors.map(color => (
                    <li key={color.name}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={clearLocalStorage}>Clear Local Storage</button>
        </div>
    );
}

export default ColorsList;
