import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { errorHandlerActions } from '../redux/ErrorHandler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
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

  let [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(translate('company-approval'));
  }
  , []);

  document.title = translate(title);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
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