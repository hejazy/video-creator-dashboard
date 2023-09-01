import { playHandlerConst } from './constants';

const initialState = {
  value: false
};

export const playHandler = (state = initialState, action) => {
  const oldState = { ...state };
  switch (action.type) {

  case playHandlerConst.PLAY:
    return {
      ...oldState,
      value: action.value,
    };

  case playHandlerConst.STOP:
    return {
      ...oldState,
      value: action.value,
    };


  default:
    return oldState;
  }
};