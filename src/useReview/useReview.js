import { useEffect, useState } from "react"

const useReview=()=>{

     const [Reviews,setReviews]=useState([])
     useEffect(()=>{
         fetch('fakeData.json')
         .then(res=>res.json())
         .then(data=>setReviews(data))
     },[])
     return [Reviews,setReviews]


}
export default useReview;