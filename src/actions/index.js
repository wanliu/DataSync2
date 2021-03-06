import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_ASYNC_COUNTER, GET_PRINTERS, PRINTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC_COUNTER,
  };
}

export function getPrinters() {
  return {
    type: GET_PRINTERS,
  };
}

export function print(printerName, url) {
  return {
    type: PRINTER,
    printerName,
    url,
  };

}
