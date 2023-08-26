import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ColorsList from './ColorsList';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
    const initialColors = [
        { name: 'Red', value: '#FF0000' },
        { name: 'Blue', value: '#0000FF' },
        { name: 'Green', value: '#008000' }
    ];
    
    const storedColors = JSON.parse(localStorage.getItem('colors')) || initialColors;

    const [colors, setColors] = useState(storedColors);

    const addColor = (color) => {
        setColors(prevColors => [color, ...prevColors]);
    };

    useEffect(() => {
        localStorage.setItem('colors', JSON.stringify(colors));
    }, [colors]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/colors" element={<ColorsList colors={colors} />} />
                <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
                <Route path="/colors/:color" element={<Color colors={colors} />} />
                <Route path="*" element={<Navigate to="/colors" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
