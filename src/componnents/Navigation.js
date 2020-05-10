import React, { Component } from 'react';
import Logo from './Logo/Logo'
class Navigation extends Component {
render(){
  return(
     <nav style={{display:'flex',alignItems:'flex-start' , justifyContent:'space-between'}}>
         <p className='pa3'> <Logo/></p>
         <p className='f3 link dim underline pa3 pointer'>Sign Out</p>
     </nav>
  );
}
}
    



export default Navigation;
