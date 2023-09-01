import { playHandlerConst } from './constants';


const play = () => {
  return {
    type: playHandlerConst.PLAY,
    value: true,
  };
};

const stop = () => {
  return {
    type: playHandlerConst.STOP,
    value: false,
  };
};

export const playHandlerActions = {
  play,
  stop,
};