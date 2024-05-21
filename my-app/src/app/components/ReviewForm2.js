'use client'
import { useState } from "react";

export default function ReviewForm2({ teacherId, onAddReview }) {
    const [reviewText, setReviewText] = useState("");
    const [reviewerName, setReviewerName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            teacherId: teacherId,
            reviewText: reviewText,
            name: reviewerName, 
            isNew: true 
        };
        onAddReview(newReview);
        setReviewText("");
        setReviewerName("");
    };

    return (
        <form onSubmit={handleSubmit} className="teacher-form">
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here"
                required
            />
            <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                placeholder="Your name and surname"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}
