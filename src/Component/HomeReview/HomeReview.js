import React from 'react';
import './HomeReview.css'


const HomeReview = (props) => {
    const  { image,text,first_name,Rating }=props. singelReviews
    return (
       
        
        <div className='reviewInfo'>
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

export default HomeReview;