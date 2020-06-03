import React from 'react';
import songInfo from './api/songlist';


const SongDef = () => {

  const songs=songInfo.map(item => ({
    title: item.title,
    cover: item.cover,
    lyric: item.lyric
  })
  );

  const hideDef = function(){
    document.getElementsByClassName("defWrapper")[0].classList.toggle("defWrapperShow");
    // for(var i=0;i<41;i++){document.getElementsByClassName("songTitle")[i].classList.toggle("titleHide");}

  }

  return(
    <div className="defWrapper">
      <div className="close" onClick={hideDef}>X </div>
      <div className="left-info info" >
       <h2>{songs.title}</h2>
       </div>
      <div className="right-info info" > </div>
    </div>
  )




};

export default SongDef;
