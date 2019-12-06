import React from 'react';
import logo from './logo.svg';
import './App.css';
import bg from './images/bg.jpg';
import Logo from './images/logo.png';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import PersonList from './Components/PersonList';
import Defis from './Components/Defis';
import Axios from 'axios';

const firebaseApp = firebase.initializeApp(firebaseConfig);


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        character: {}
    }
}




  render() {

   

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;


  if(user){







    return (
     <div className="allwrapper">
        <div className="allHeader">
          <div className="uk-container">
            <div className="header">
              <div className="logo"></div>
              <span onClick={signOut} className="logout" uk-icon="icon: sign-out; ratio: 2"></span>
            </div>
            <div className="welcomearea">
                <div className="text">
                <h1 className="welcometext">Bonjour, {user.displayName}</h1>
                </div>
            </div>

          </div>
        </div>
        <div className="uk-container">
        <div className="allpagebody uk-grid" >
        <div class="uk-width-1-4@m">
        <li class="uk-nav-header">MENU</li>
            <ul class="uk-nav uk-nav-default" uk-switcher="connect: #component-nav; animation: uk-animation-fade">

                <li class="uk-active"><a href="#"><span uk-icon="icon: home;"></span> Mes défis</a></li>
                <li><a href="#"><span uk-icon="icon: location;"></span> Terrain de football a proximité</a></li>
                <li><a href="#"><span uk-icon="icon: heart;"></span>  Essentiel</a></li>
                <li class="uk-nav-divider"></li>
            </ul>
            <li><a target="_blank" href="https://www.decathlon.fr/"><span uk-icon="icon: cart;"></span> Boutique Decathlon</a></li>
        </div>

        <div class="uk-width-expand@m">

        <ul id="component-nav" class="uk-switcher">
            <li>

              <div className="mesdefis boldtxt">
                <h1>Mes défis</h1>
                <Defis />
              </div>
            </li>
            <li>
            <div className="terrainap boldtxt">
                <h1>Terrain de football a proximité</h1>
                <div>
                <PersonList />
            </div>
              </div>
            </li>
            <li>
             

            <div className="mesdefis boldtxt">
                <h1>Produits essentiel</h1>
              </div>

            <div class="uk-child-width-1-2@m uk-grid">
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://contents.mediadecathlon.com/p1671448/k$0ffa87925c3359dbca82c3d89917d591/sq/Chaussure+de+football+adulte+Copa+19+3+HG+noire.webp?f=1000x1000" alt=""></img>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">CHAUSSURE DE FOOTBALL ADULTE COPA </h3>
                <p>jouer au football à 7 ou à 11, une à deux fois par semaine sur terrain dur ou synthétique court.

Cette chaussure de football adulte offre au joueur un bon confort.</p>
<h2><b>39€</b></h2>
<a target="_blank" href="https://www.decathlon.fr/p/chaussure-de-football-adulte-copa-19-3-hg-noire/_/R-p-X8541144"><button class="uk-button uk-button-primary"><span uk-icon="icon: cart;"></span> Acheter</button></a>
            </div>
        </div>
    </div>


    <div>

        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://contents.mediadecathlon.com/p1610152/k$2375fdfbb1f5f5ff1019f366cf0b16b6/sq/Maillot+de+football+enfant+manche+courte+F500+turquoise+et+bleu.webp?f=1000x1000" alt=""></img>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">MAILLOT DE FOOTBALL ENFANT MANCHE COURTE F500 TURQUOISE ET BLEU</h3>
                <p>Nos équipes ont développé ce maillot de football , léger et respirant pour le jeune footballeur confirmé, en match ou à l'entrainement, 2 à 3 fois par semaine.</p>
<h2><b>9€</b></h2>
<a target="_blank" href="https://www.decathlon.fr/p/maillot-de-football-enfant-manche-courte-f500-bleu-et-blanc/_/R-p-305382?mc=8554670&c=VERT_TURQUOISE"><button class="uk-button uk-button-primary"><span uk-icon="icon: cart;"></span> Acheter</button></a>
            </div>
        </div>
    </div>


    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://contents.mediadecathlon.com/p1604448/k$369d15746c23aad4fe56d71c4cb8fde4/sq/Short+de+football+adulte+F100+noir.webp?f=1000x1000" alt=""></img>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">SHORT DE FOOTBALL ADULTE F100 NOIR</h3>
                <p>Nos concepteurs footballeurs ont développé ce short de football F100 pour vos entraînements et matchs, jusqu'à 2 fois par semaine.</p>
<h2><b>5€</b></h2>
<a target="_blank" href="https://www.decathlon.fr/p/short-de-football-adulte-f100-bleu/_/R-p-108306?mc=8327267&c=NOIR"><button class="uk-button uk-button-primary"><span uk-icon="icon: cart;"></span> Acheter</button></a>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://contents.mediadecathlon.com/p1062294/k$10bd27d4ca72353309ff75bcceaae748/sq/Prot+ge+tibias+de+football+F100+enfant+noir.webp?f=1000x1000" alt=""></img>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">PROTÈGE-TIBIAS DE FOOTBALL F100 ENFANT NOIR</h3>
                <p>Nos concepteurs footballeurs ont développé ce protège-tibia rapide à fixer et léger, idéal pour les matchs comme pour les entraînements.</p>
<h2><b>3,50€</b></h2>
<a target="_blank" href="https://www.decathlon.fr/p/protege-tibias-de-football-f100-enfant-noir/_/R-p-166931?mc=8383800&c=NOIR"><button class="uk-button uk-button-primary"><span uk-icon="icon: cart;"></span> Acheter</button></a>
            </div>
        </div>
    </div>


   
</div>
            </li>
        </ul>

        </div>
          </div>
        </div>
     </div>
    );
  }else {
    return (
      <div className="allwrapper">
     
     <div className="leftside">
         <div className="topHeader">
          <div className="logo"></div>
         </div>
         
         <div  className="connexion">
           <h1>Connexion</h1>
           <h3>Connectez-vous avec google pour acceder a notre application.</h3>
           <div onClick={signInWithGoogle}  class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Se connecter avec google</b></p>
</div>
         </div>
        </div>
   

        <div className="rightBg">
        <div className="bg"></div>
<h1>Le football commence ici </h1>
      </div>
      
      </div>
    )
  }

  }
}











class Header extends React.Component{
  render(){
    return(
        <h1>fds</h1>
    );
  }
}


class LeftSide extends React.Component{
  render(){
    return(
        <div className="leftside">
         <div className="topHeader">
          <div className="logo"></div>
         </div>
         
         <div  className="connexion">
           <h1>Connexion</h1>
           <h3>Connectez-vous avec google pour acceder a notre application.</h3>
           <div class="google-btn">
  <div onClick={App.signInWithGoogle} class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Se connecter avec google</b></p>
</div>
         </div>
        </div>
    );
  }
}

class RightSide extends React.Component{
  render(){
    return(
      <div className="rightBg">
        <div className="bg"></div>
<h1>        Votre aventure 
en Football debute 
maintenant !</h1>
      </div>
    );
  }
}


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);