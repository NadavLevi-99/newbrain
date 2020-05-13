import React from 'react';
import "./FaceRec.css";
const FaceRec = ({imgurl , box}) => {
  const printbox = box.map(element => {
    return  <div className='bounding-box' style={{top: element.top, right: element.right, bottom: element.bottom, left: element.left}}></div> 
  });
  return(
     <div className='rank'>
       <div className='absolute mt2'>
         <img width='500px' height='500px' alt="img" src={imgurl}/>
         {printbox}
         {/* {console.log(box[0])}
         <div className='bounding-box' style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}}></div> */}
      </div>
     </div>
  );
}
    
export default FaceRec;
