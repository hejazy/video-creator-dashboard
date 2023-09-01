import React, { useEffect, useRef, useState} from 'react';
import { connect } from 'react-redux';
import {Slider, Previewer, Button} from '../../components'
import {convertBase64} from "../../util/base64"
import 'bootstrap/scss/bootstrap.scss';
import { playHandlerActions } from '../../redux/play';

const HomeFunction = ({
  play,
  stop,
}) => {
  // useEffect(() => {

  // }, []);
  const [images, setImages] = useState([]);

  const hiddenFileInput = useRef(null);
  
  const handleNewImageChange = async event => {
    setImages([...images, {
      url: await convertBase64(event.target.files[0]),
      file: event.target.files[0],
      delay: Math.floor(Math.random() * 10000)
    }]);
  };
  const uploadNewImage = event => {
    hiddenFileInput.current.click();
  };

  const generateImages = ()=>{

  }



  return (
    <div className='home-page'>
      <div className='col-12'>
        <Previewer
          onFinish={stop}
          images={images}
          key='previewer'
        />
      </div>
      <div className='col-12 d-md-flex d-inline-block'>
        <div className='col-12 col-md-8'>
          <Slider
            images={images}
            key='slider'
            onRemoveImage={(idx)=> {
              images.splice(idx, 1);
              setImages([...images]);
            }}
          />
        </div>
        <div className='col-6 col-md-2'>
          <Button
            classes='bg-primary w-100'
            value="Upload"
            onClick={uploadNewImage}
          />
          <input
            type="file"
            onChange={handleNewImageChange}
            ref={hiddenFileInput}
            style={{display: 'none'}}
          />
          <Button
            classes='bg-primary w-100'
            value="Play" 
            disabled={!images.length}
            onClick={play}
          />
        </div>
        <div className='col-6 col-md-2'>
          <Button
            classes='bg-Secondary w-100'
            value="Generate" 
            disabled={!images.length}
            onClick={generateImages}
          />
        </div>
      </div>
      
    </div>
  );
};

const addToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    play: ()=> dispatch(playHandlerActions.play()),
    stop: ()=> dispatch(playHandlerActions.stop())
  };
};
export const Home = connect(
  addToProps,
  mapDispatchToProps
)(HomeFunction);
