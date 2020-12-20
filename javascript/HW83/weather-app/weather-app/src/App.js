import './App.css';
import React, { Component } from 'react';
import Weather from './weather';

export default class App extends Component {  

  getTheWeatherFunction=e=> {
    const apiKey = 'cb7c71219cf09eb0bb414b932669be97';
    const units = 'imperial';
    const zip = e.target.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
    .then(r =>  {if (!r.ok) {
        throw new Error(`error!`);
      }
      return r.json();
    })
    .then(weatherData => { this.setState({
                          weather:
                          {
                            place: weatherData.name,
                            pic: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                            description:`${weatherData.main.temp} and ${weatherData.weather[0].description}`
                               } 
                                 })
      
     
     })
    .catch(err => console.log(err));
                               
  }

  render() {
    

    return (
      <div>       
        <hr />
     
        <input type="number"  onBlur={this.getTheWeatherFunction} />
       <Weather weather={this.props.weather}/>
      
        <hr />
       
       
      </div>
    )
  }}
