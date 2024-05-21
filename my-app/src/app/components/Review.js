import Link from 'next/link';

const ReviewComponent = ({ review }) => {
  return (
    <div>
      <h2><strong>{review.name}</strong></h2>
      <p><strong>{review.body}</strong></p>
      <p>Email: {review.email}</p>
      <p>Date: {review.date}</p> 
      <Link href="/pages/reviews">Go back</Link>
    </div>
  );
};

export default ReviewComponent;
