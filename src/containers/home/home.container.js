import React, { useRef, useState} from 'react';
import { connect } from 'react-redux';
import {Slider, Previewer, Button} from '../../components'
import 'bootstrap/scss/bootstrap.scss';
import './home.scss';
import { playHandlerActions } from '../../redux/play';
import {GenerateServiceFactory} from '../../clients/generate.service'
import {uploadImage} from '../../clients/firebase.service'


const genrateService = GenerateServiceFactory.getInstance()


const HomeFunction = ({
  play,
  stop,
}) => {
  const [images, setImages] = useState([]);

  const hiddenFileInput = useRef(null);
  
  const handleNewImageChange = async event => {
    const url = await uploadImage(event.target.files[0])
    setImages([...images, {
      url,
      delay: Math.floor(Math.random() * 5000)
    }]);
  };
  const uploadNewImage = () => {
    hiddenFileInput.current.click();
  };

  const generateImages = async ()=>{
    const response = await genrateService.create(images)
    const href = URL.createObjectURL(response.data);

    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'new-video.mp4');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }



  return (
    <div className='home-page'>
      <div className='col-12 p-5 previewer-container'>
        <Previewer
          onFinish={stop}
          images={images}
          key='previewer'
        />
      </div>
      <div className='col-12 d-md-flex d-inline-block controles'>
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
        <div className='col-12 col-md-2'>
          <Button
            classes='bg-primary w-100 height-100'
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
            classes='bg-primary w-100 height-100'
            value="Play" 
            disabled={!images.length}
            onClick={play}
          />
        </div>
        <div className='col-12 col-md-2'>
          <Button
            classes='bg-Secondary w-100 height-200'
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
