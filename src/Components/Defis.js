import React from 'react';
import Axios from 'axios';
import { geolocated } from "react-geolocated";
import { usePosition } from 'use-position';






export default class Defis extends React.Component{

    state = {
        persons: [], 
        test : 'oui',
    };
    
  
    constructor(props) {
        super(props);

    }



 

    componentDidMount() {
        Axios.get('http://decathlonapi.workprojets.ch/defis.php').then(res => {
            console.log(res.data);
            this.setState({persons: res.data});  
        })
    }

 


    render(){
        return (
            <div className="dd">
                  <div class="uk-child-width-1-2@m uk-grid">
                  {this.state.persons.map(persons =>  
                    
                    <div>
                    <div class="uk-card uk-box-shadow-large uk-card-body">
                    <div class="uk-card-badge uk-label">{persons.Categorie}</div>
                        <h3 class="uk-card-title">{persons.Nom_defi}</h3>
                        <p>{persons.Desc_defi}</p>
                    </div>
                </div>
 )}
                  </div>


            </div>
           
        )
    }

}

/*
     {this.state.persons.map(persons => <li>{persons.name}</li>)} *
*/