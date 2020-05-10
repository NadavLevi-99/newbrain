import React, { Component } from 'react';
import Navigation from './componnents/Navigation';
import ImageLinkForm from './componnents/ImageLinkForm';
import Rank from './componnents/Rank';
import FaceRec from './componnents/FaceRec';
import './App.css';
import Particles from 'react-particles-js';

const Clarifai = require('clarifai');
const particelsOptions ={
particles: {
      value:40,
      density:{
        enable:true,
        value_area:800
      }

}} ;
class App extends Component {
constructor(){
  super();
  this.state = {
    input: '',
    imageurl:'',
    famousname:'',
  }
}
onInputChange = (event) => {
  this.setState({input: event.target.value });
}
onButtonClick = () => {
   // Instantiate a new Clarifai app by passing in your API key.
   const app = new Clarifai.App({apiKey: 'e9a5812498ee48b28b0e1ddd68084e9f'});
      
   // Predict the contents of an image by passing in a URL.
   app.models.predict("e466caa0619f444ab97497640cefc4dc", this.state.input).then(
 function(response) {
   console.log("FFFF");
   const nameofceleb = String(response.outputs[0].data.regions[0].data.concepts[0].name);
   this.setState({famousname: nameofceleb});
   console.log(this.famousname);
   console.log(nameofceleb);
 },
 function(err) {
   console.log("errroorrrr", err);
 }
);

}
render(){
  return(
    <div>
      <Particles className='particels' params={particelsOptions}/>
      <Navigation/>
      <Rank famousname={this.state.famousname}/>
      <ImageLinkForm onButtonClick={this.onButtonClick} onInputChange={this.onInputChange}/>
      <FaceRec imgurl={this.state.input}/>
    </div>
  );
}
}
    



export default App;
