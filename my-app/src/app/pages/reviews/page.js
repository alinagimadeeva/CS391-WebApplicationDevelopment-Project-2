"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ReviewForm from '@/app/components/ReviewForm'; 

export default function Reviews() {
    const [reviewsList, setReviewsList] = useState([]);
    const [reviewsLoaded, setReviewsLoaded] = useState(false);

    useEffect(() => {
        if (!reviewsLoaded) {
            loadReviews();
        }
    }, [reviewsLoaded]);

    const loadReviews = () => {
        fetch(`http://localhost:8000/reviews`)
            .then(response => response.json())
            .then(data => {
                setReviewsList(data);
                setReviewsLoaded(true);
            })
            .catch(error => console.log(error));
    };

    const handleReviewSubmit = (newReview) => {
        fetch('http://localhost:8000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(response => response.json())
        .then(() => {
            setReviewsLoaded(false);
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="reviews-container">
            <h1>Our Reviews</h1>
            {reviewsList.map(el => (
                <div key={el.id} className="review">
                    <h2><strong>{el.title}</strong></h2>
                    <p>{el.body}</p>
                    <p><strong>{el.name}</strong></p>
                    <Link href={`/pages/review/${el.id}`}>See more</Link>
                </div>
            ))}
            <ReviewForm onSubmitSuccess={handleReviewSubmit} />
        </div>
    );
}