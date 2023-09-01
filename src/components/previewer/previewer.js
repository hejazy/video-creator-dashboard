import React, {useEffect} from 'react';
import './previewer.scss';
import {wait} from "../../util/wait"
import { connect } from 'react-redux';

export const PreviewerFun = ({
  images = [],
  play,
  onFinish,
}) => {
  const drawCanvas = async ()=> {
    if(play === true && images.length) {
      const c = document.getElementById("container");
      const ctx = c.getContext("2d");
      for(let image of images){
        const currentImage = new Image();
        currentImage.onload = function() {
          ctx.clearRect(0, 0, c.width, c.height);
          var wrh = currentImage.width / currentImage.height;
          var newWidth = c.width;
          var newHeight = newWidth / wrh;
          if (newHeight > c.height) {
            newHeight = c.height;
            newWidth = newHeight * wrh;
          }
          var xOffset = newWidth < c.width ? ((c.width - newWidth) / 2) : 0;
          var yOffset = newHeight < c.height ? ((c.height - newHeight) / 2) : 0;
        	ctx.drawImage(this, xOffset, yOffset, newWidth, newHeight);
        };
        currentImage.src = image.url;
        await wait(image.delay)
      }
    }
    onFinish();
  }

  useEffect(()=>{
    drawCanvas()
  }, [play])


  return (
    <div className="previewer-class">
      <canvas id="container"></canvas>
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




