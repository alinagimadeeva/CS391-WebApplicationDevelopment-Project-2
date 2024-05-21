'use client'
import { useState } from 'react';

function ReviewForm({ onSubmitSuccess }) {
    const today = new Date().toISOString().slice(0, 10);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: 'My impression',
        body: '',
        date: today
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.body.trim()) newErrors.body = 'Review text is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmitSuccess(formData);
        setFormData({ name: '', email: '', title: '', body: '', date: '' });
        setErrors({}); 
    };

    return (
        <div className="review-form">
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name and surname" value={formData.name} onChange={handleInputChange} />
                {errors.name && <p>{errors.name}</p>}
                <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} />
                {errors.email && <p>{errors.email}</p>}
                <input type="text" name="title" placeholder="Review title" value={formData.title} onChange={handleInputChange} />
                {errors.title && <p>{errors.title}</p>}
                <textarea name="body" placeholder="Your review" value={formData.body} onChange={handleInputChange}></textarea>
                {errors.body && <p>{errors.body}</p>}
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}

export default ReviewForm;
