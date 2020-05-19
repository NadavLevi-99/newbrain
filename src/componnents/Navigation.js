import React from 'react';
import Logo from './Logo/Logo'
const Navigation = ({route , onRouteChange}) => {

  return(
     <nav style={{display:'flex',alignItems:'flex-start' , justifyContent:'space-between'}}>
         <p className='pa3'> <Logo/></p>
         {route === 'home' 
         ? <p onClick={() => onRouteChange('signin')} className='f3 link dim underline pa3 pointer'>Sign Out</p>
         : <nav className='wrapnav'> <p onClick={() => onRouteChange('signin')} className='f3 link dim underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim underline pa3 pointer'>Register</p>
         </nav>
        }
     </nav>
  );

}
    



export default Navigation;
