import React from 'react';
import './Home.css'
import image from '../../image/h1_hero1.jpg.webp'
import useReview from '../../useReview/useReview';
import HomeReview from '../HomeReview/HomeReview';
import { Navigate, useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate=useNavigate()
    const [Reviews,setReviews]=useReview([])
    return (
        <>       
         <div className='Home_Container'>
           <div className="text_part">
           <h1 >Lets Make your Interior Better</h1>
           
           <p >Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
           </div>
           <div className="image_part">
               <img src={image} alt="" />
           </div>
           
        </div>
        <h3> Customers Review({Reviews.slice(0,3).length})</h3>
        <div className='HomeReview'>
      
          {
                Reviews.slice(0,3).map(singelReviews=><HomeReview
                    singelReviews={singelReviews}
                    key={singelReviews.id}
                ></HomeReview>)
                
            }
           
        </div>
    <button onClick={()=>navigate('/Review')} className='All-Review-Btn' >All review</button>
    </>

    );
};

export default Home;