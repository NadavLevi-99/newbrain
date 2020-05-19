import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonClick }) => {

  return(
      <div style={{display:'flex' , justifyContent:'center'}}>
         <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-45-l mw6 center">
    <div  class="pa4 black-80 measure">
      {/* <label style={{display:'flex' , justifyContent:'center'}} for="name" class="f6 b db mb2">{'Image Link'}</label> */}
      <small id="name-desc" class="f6 black-60 db mb2">{'Type an url of a person image and the magic will happen'}</small>
      <div style={{display:'flex' ,flexWrap:'wrap'}}>
      <input style={{display:'flex' ,flexGrow:'3'}} id="name" class="input-reset ba b--black-20 pa2 mb2 db w-70 " type="text" aria-describedby="name-desc" placeholder='URL' onChange={onInputChange}/>
      <div className=' ph1 h-100'>
      <input style={{display:'flex' ,flexGrow:'1'}}  class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib W-30" type="submit" value="Detect" onClick={onButtonClick}></input>
      </div>
      </div>
      </div>
      </article>
      </div>
  );

}

export default ImageLinkForm;