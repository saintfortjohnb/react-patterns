import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NewColorForm.css';

function NewColorForm({ addColor }) {
    const [formData, setFormData] = useState({ name: "", value: "#ffffff" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        navigate('/colors');
    };

    return (
        <form onSubmit={handleSubmit} className='container'>
            <h1> Pick a color</h1>
            <div>
                <label htmlFor="name">Color Name: </label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="value">Color Value: </label>
                <input type="color" name="value" id="value" value={formData.value} onChange={handleChange} />
            </div>
            <button>Add Color</button>
            <div className='anchor'>
                <Link to="/colors">← Go Back to Colors List</Link>
            </div>
        </form>
    );
}

export default NewColorForm;
