
import React, { useState } from "react";
import songInfo from './api/songlist';
import styled from 'styled-components';
import SongDef from './SongDef'
import App from './App'



const Song = ({ count }) => {
   const [state,setState]=useState(false);
  const songs=songInfo.map(item => ({
    title: item.title,
    cover: item.cover
    })

);

   // const toggleState = () => {
   //  this.setState({ showDef: !this.state.showDef });
   //
   // };
  const toggleClass = function(){
    document.getElementsByClassName("defWrapper")[0].classList.toggle("defWrapperShow");
    // for(var i=0;i<41;i++){document.getElementsByClassName("songTitle")[i].classList.toggle("titleHide");}

  }
  const showDef = function(){
    render (
      return <SongDef />
    )
  }

  return (
    <div className="bigWrap">
           {
             songs.map(item=>
               <div key={item.id} className="songWrapper">
                 <div className="songSingle">
                 <h2 className="songTitle"> {item.title} </h2>
                 <div >
                   <img width="200" src={item.cover} onClick={showDef} />
                 </div>
                </div>
               </div>
             )
           }
        </div>


  );
};

export default Song;
