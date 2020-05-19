import React from 'react';
import '../App.css'
const Rank = ({famousname , personDetails}) => {
   if(personDetails.age > 0)
   {
  return(
     <div className='center f4 black-70'>
       <p className="tl">{"this is our estimation of the person in the picture details:"}</p>
       <p className="tl">{"Age: " + personDetails.age}</p>
       <p className="tl">{"Gender: " + personDetails.gender}</p>
       <p className="tl">{"Ethnic Group: " + personDetails.demogrhafics}</p>

     </div>
  );
   }else {
      return (<div></div>);
   }

}

export default Rank;
