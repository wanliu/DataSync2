// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_PRINTERS, PRINTER } from '../constants/ActionTypes';

type actionType = {
  type: string
};

export default function printer(state: object = {printers: []}, action: actionType) {
  console.log(state, action)
  switch (action.type) {
    case GET_PRINTERS: 
      return {
        ...state,
        printers: action.printers,
      }
    // case PRINTER:
    //   return {
    //     ...state,
    //     print: {
    //       printerName: action.printerName,
    //       url: action.url
    //     },
    //   }
    default:
      return state;
  }
}
