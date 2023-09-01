import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './error-handling.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { errorHandlerActions } from '../../redux/ErrorHandler';


function errorHandlingModal({
  errorHandling,
  displayErrorBoolean,
}) {
  const errorHandlingMessages = ()=> {
    switch (errorHandling.ERROR_CODE) {
    case 400:
      return <div>
        <h2>{'Bad Request'}</h2>
        <div>{'400'}</div>
        <p>{'Bad request!'}</p>
      </div>;
    case 500:
      return <div>
        <h2>{'Internal Errors'}</h2>
        <div>{'500'}</div>
        <p>{'something wrong in the server, please try again later'}</p>
      </div>;
    case 'without_status_code':
      return <div>
        <h2>{'Network Issue'}</h2>
        <p>{'Can not initiate request to the server.'}</p>
      </div>;
    default:
      return <div>
        <h2>{'Unknown Issue'}</h2>
        <p>{'Something went wrong.'}</p>
      </div>;
    }
  };

  return (
    <Modal
      show={errorHandling.DISPLAY_ERROR_MESSAGE_BOOLEAN}
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='error-handling-modal'
      data-testid='error-handling-modal'
    >
      <Modal.Body>
        <div className='error-modal-content'>
          <button type="button"
            className="close error-modal-close-icon"
            onClick={()=> {
              displayErrorBoolean(false);
            }}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>

          <div className='error-modal-leftBg'>
            <span className='fas fa-exclamation-triangle' />
          </div>
          <div className='error-modal-rightCont'>
            <div>

              {
                errorHandlingMessages()
              }
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}


function mapStateToProps(state) {
  return {
    errorHandling: state.errorHanlder,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...errorHandlerActions,
  }, dispatch);

}

export const ErrorHandlingModal = connect(mapStateToProps, mapDispatchToProps)(errorHandlingModal);
