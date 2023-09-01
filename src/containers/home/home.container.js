import React, { useEffect, useRef, useState} from 'react';
import { connect } from 'react-redux';
import {Slider, Previewer, Button} from '../../components'
import {convertBase64} from "../../util/base64"
import 'bootstrap/scss/bootstrap.scss';

const HomeFunction = ({
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


  const playImages = ()=>{

  }
  const generateImages = ()=>{

  }



  return (
    <div className='home-page'>
      <div className='col-12'>
        <Previewer
        />
      </div>
      <div className='col-12 d-flex'>
        <div className='col-12 col-md-8'>
          <Slider
            images={images}
            removeImage={(idx)=> {
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
            onClick={playImages}
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
  };
};
export const Home = connect(
  addToProps,
  mapDispatchToProps
)(HomeFunction);
