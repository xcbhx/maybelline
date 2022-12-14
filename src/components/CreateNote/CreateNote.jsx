import { text } from 'express';
import { useState } from 'react';


export default function CreateNote() {
    const [formData, setFormData] = useState({
        text: ''
    });

    function handleChange(evt) {
        setFormData({text: evt.target.value});
    }

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <div>
            <h1>New Note</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name="text"
                type="text" 
                value={formData.text}
                onChange={handleChange}
                placeholder="Write A Note"
                required
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}