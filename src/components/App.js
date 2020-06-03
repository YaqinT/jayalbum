//the parent component for the other 3
//contain the function that handles the API request
//have a function that calls the API during the component’s initial render.
import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Header from "./Header";
import Song from "./Song";
import Search from './Search';
import songInfo from './api/songlist';
import SongDef from './SongDef';

//
//
// const App = () =>{
//

   class App extends Component {
     constructor(props){
       super(props);
       this.state = {
         showDef:false,    //initial state
         count:0
       }
       // this.toggleState = this.toggleState.bind(this);
     }
     // let showDef = this.state.showDef;
     // let count = this.count;



     render(){
      return(
        <>
        <SongDef />
        <Header text="JAY CHOU"/>
        <Song count={this.state.count}  />
        </>
      )

     }

             // toggleState(){
             //  this.setState({ showDef: !this.state.showDef });
             // }

   }




 //   useEffect(() => {
 //   document.title = `You clicked ${count} times`;
 // });







export default App;
