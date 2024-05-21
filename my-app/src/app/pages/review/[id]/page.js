'use client';
import { useState, useEffect } from 'react';
import ReviewComponent from '@/app/components/Review';
import Link from 'next/link'; 

function ReviewPost({ params: { id } }) {
    const [review, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8000/reviews/${id}`);
                const result = await res.json();
                setPost(result);
            } catch (error) {
                console.error('Failed to fetch review:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!review) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reviews-container">
            <h1>The review</h1>
            <div className="review">
                <ReviewComponent review={review} />
            </div>
            <div className="review-action"> 
                <p>Do you want to leave your own honest review?</p>
                <p>You can use the form below on the previous page</p>
                <Link href="/pages/reviews" passHref>
                    <button className="back-button">To the form</button>
                </Link>
            </div>
        </div>
    );
}

export default ReviewPost;
