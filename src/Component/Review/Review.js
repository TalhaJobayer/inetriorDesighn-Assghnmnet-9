import React from 'react';
import useReview from '../../useReview/useReview';
import './Review.css'
import ReviewerInfo from '../ReviewerInfo/ReviewerInfo';

const Review = () => {
    const [Reviews,setReviews]=useReview([])
    return (
        <div className='review_Container'>
            {
                Reviews.map(singleReview=><ReviewerInfo
                    singleReview={singleReview}
                    key={singleReview.id}
                ></ReviewerInfo>)
            }
        </div>
    );
};

export default Review;