import React from 'react';
import './ReviewerInfo.css'

const ReviewerInfo = (props) => {
   const  { image,text,first_name,Rating }=props.singleReview
    return (
        <div className='review'>
           <div className="Img_part">
           <img src={image} alt="" />
           </div>
            <div className="Text-part">
            <h4>{text}</h4>
            <h5>Ratings:{Rating}</h5>
            <h3>-{first_name}</h3>
            </div>
        </div>
    );
};

export default ReviewerInfo;