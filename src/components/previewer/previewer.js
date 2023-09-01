import React, {useEffect} from 'react';
import './previewer.scss';
import {wait} from "../../util/wait"
import { connect } from 'react-redux';

export const PreviewerFun = ({
  images = [],
  play,
  onFinish,
}) => {
  console.log(play)
  const drawCanvas = async ()=> {
    if(play === true && images.length) {
      console.log(play)
      const c = document.getElementById("container");
      const ctx = c.getContext("2d");
      for(let image of images){
        const currentImage = new Image();
        currentImage.onload = function() {
          ctx.drawImage(this, 0, 0);
        };
        currentImage.src = image.url;
        await wait(image.delay)
        console.log(image.delay)
      }
    }
    onFinish();
  }

  useEffect(()=>{
    drawCanvas()
  }, [play])


  return (
    <div className="previewer-class">
      <canvas id="container" className='w-100'></canvas>
   </div>

  );
}

const addToProps = (state) => {
  return {
    play: state.playHandler.value,
  };
};

export const Previewer = connect(
  addToProps,
)(PreviewerFun);




