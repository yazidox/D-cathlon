import React from 'react';
import Axios from 'axios';
import { geolocated } from "react-geolocated";
import { usePosition } from 'use-position';




                navigator.geolocation.getCurrentPosition(displayLocationInfo);
          
        function displayLocationInfo(position) {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude;
          console.log(`longitude: ${ lng } | latitude: ${ lat }`);
        
        }


export default class PersonList extends React.Component{

    state = {
        persons: [], 
        test : 'oui',
    };
    
  
    constructor(props) {
        super(props);
        


        this.lag= -0.771750;
        this.lat = 48.070170;
        this.open = false; 


   

         
        


    }



 

    componentDidMount() {
        Axios.get('https://sportplaces.api.decathlon.com/api/v1/places?origin=-73.582,45.511&radius=99&sports=81').then(res => {
            console.log(res.data.data.features);
            this.setState({persons: res.data.data.features});  
            
            console.log(this.state.test);
        })
    }

 


    render(){

        
        return (

            <div className="dd">
            <div class="uk-child-width-1-2@m uk-grid">
            {this.state.persons.map(persons =>   <div>
        <div class="uk-card uk-card-default" >
            <div class="uk-card-media-top">
                <img src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""></img>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{persons.properties.name}</h3>
                <p>{persons.properties.notes}</p>
            </div>
        </div>
    </div> )}

    </div>

          
  


            </div>
        )
    }

}

/*
     {this.state.persons.map(persons => <li>{persons.name}</li>)} *
*/