import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const home = ({
}) => {
  // useEffect(() => {

  // }, []);

  return (
    <div className='home-page'>
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
)(home);
