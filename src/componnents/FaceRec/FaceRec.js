import React from 'react';
import "./FaceRec.css";
const FaceRec = ({imgurl , box}) => {
  
  const printbox = box.map(element => {
    return  <div className='bounding-box' style={{top: element.top, right: element.right, bottom: element.bottom, left: element.left}}></div> 
  });
  return(
     <div className='center'>
       <div className='absolute mt2'>
         <img alt='' width='500px' height='500px' src={imgurl}/>
         {printbox}
      </div>
     </div>
  );
}
    
export default FaceRec;
