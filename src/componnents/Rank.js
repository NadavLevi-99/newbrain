import React from 'react';
import '../App.css'
const Rank = ({famousname , personDetails,user}) => {
   if(personDetails.age > 0)
   {
  return(
     <div className='center f4 black-70'>
      <ul className='liststyletype'>
       <li className="tl">{"user name: " + user.name}</li>
       <li className="tl">{"user enteries: " + user.enteries}</li>
       <li className="tl">{"this is our estimation of the person in the picture details:"}</li>
       <li className="tl">{"Age: " + personDetails.age}</li>
       <li className="tl">{"Gender: " + personDetails.gender}</li>
       <li className="tl">{"Ethnic Group: " + personDetails.demogrhafics}</li>
      </ul>
     </div>
  );
   }else {
      return (
      <div className='center f4 black-70'>
      <ul className='liststyletype'>
         <li className="tl">{"user name: " + user.name}</li>
         <li className="tl">{"user enteries: " + user.enteries}</li>

      </ul>
      {/* <p className="tl">{"user name: " + user.name}</p>
      <p className="tl">{"user enteries: " + user.enteries}</p> */}
      </div>
      );
   }

}

export default Rank;
