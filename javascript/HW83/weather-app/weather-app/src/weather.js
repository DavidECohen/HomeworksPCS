
import React from 'react'



export default function Weather (props) {


 if(props.weather){
    const { place, pic, descriptions } =props.weather;
 
    /*const pictureElem = this.state.imageShowing ?
      <img className="img-fluid img-thumbnail img" src={picture} alt={name} /> :
      null;*/

   
    return (
      <div>
        <h2>{place}</h2>
        
        <br/>
        <h2>{pic}</h2>
        <br/>
        <h2>{descriptions}</h2>
       
      </div>
    )}return ("no zipcode entered-please enter a zipcode");
  }

