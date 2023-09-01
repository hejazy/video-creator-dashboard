import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { errorHandlerActions } from '../redux/ErrorHandler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/scss/bootstrap.scss';

import {
  Home,
} from './';

import {
  ErrorHandlingModal,
} from '../components';

const rootContainer = ({
  errorHanlder,
}) => {

  document.title = "Video Creator";

  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<Home/>}/>
        </Routes>
        {errorHanlder.DISPLAY_ERROR_MESSAGE_BOOLEAN && <ErrorHandlingModal/>}
      </Router>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errorHanlder: state.errorHanlder,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...errorHandlerActions,
  }, dispatch);
}

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);