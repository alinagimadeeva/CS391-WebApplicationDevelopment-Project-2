'use client'
import { useState, useEffect } from "react";
import ReviewForm2 from "@/app/components/ReviewForm2";

export default function TeacherDetail({ params }) {
    const [reviews, setReviews] = useState([]);
    const [teacher, setTeacher] = useState({});
    const [reviewsLoaded, setReviewsLoaded] = useState(false);

    const loadTeacher = (id) => {
        fetch(`http://localhost:8000/teachers/${id}`)
            .then(response => response.json())
            .then(data => {
                setTeacher(data);
            })
            .catch(error => { console.log(error) });
    }

    const loadReviews = (teacherId) => {
        fetch(`http://localhost:8000/teachers_reviews?teacherId=${teacherId}`)
            .then(response => response.json())
            .then(data => {
                const updatedReviews = data.map(review => ({ ...review, isNew: false }));
                setReviews(updatedReviews);
                setReviewsLoaded(true);
            })
            .catch(error => { console.log(error) });
    }

    const addReview = (review) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(review),
            headers: new Headers({ 'Content-Type': 'application/json' })
        }
        fetch(`http://localhost:8000/teachers_reviews`, options)
            .then(response => response.json())
            .then(data => {
                setReviews(prevReviews => [...prevReviews, { ...data, isNew: true }]);
            })
            .catch(error => { console.log(error) });
    }

    const deleteReview = (reviewId) => {
        const options = {
            method: 'DELETE',
        }
        fetch(`http://localhost:8000/teachers_reviews/${reviewId}`, options)
            .then(() => {
                setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId));
            })
            .catch(error => { console.log(error) });
    }

    useEffect(() => {
        loadTeacher(params.teacherId);
    }, [params.teacherId]);

    useEffect(() => {
        if (!reviewsLoaded) {
            loadReviews(params.teacherId);
        }
    }, [reviewsLoaded, params.teacherId]);

    return (
        <div className="teacher-detail-container">
            <h1>{teacher.name}</h1>
            <p><b>Job:</b> {teacher.job}</p>
            <p><b>Description:</b> {teacher.text}</p>
            <img src={teacher.img} alt={teacher.name} className="teacher-img" />

            <h3>Reviews</h3>
            <ul className="reviews-list">
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        {review.reviewText} <strong className="reviewer-name">- {review.name}</strong>
                        {review.isNew && (
                            <button onClick={() => deleteReview(review.id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>

            <ReviewForm2 teacherId={params.teacherId} onAddReview={addReview} />
        </div>
    );
}
