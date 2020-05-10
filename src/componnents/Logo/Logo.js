import React, { Component } from 'react';
import LogoBrain from './LogoBrain.png'
class Logo extends Component {
render(){
  return(
     <div>
         <img className='w4' src={LogoBrain} alt='logo'/>
     </div>
  );
}
}
    



export default Logo;
