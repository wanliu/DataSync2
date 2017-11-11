import { put, call, takeEvery, fork} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { 
  INCREMENT_COUNTER, 
  INCREMENT_ASYNC_COUNTER, 
  GET_ASYNC_PRINTERS, 
  GET_PRINTERS, 
  PRINTER,
} from '../constants/ActionTypes';
import gui from 'nw.gui';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: INCREMENT_COUNTER });
}

export default function* rootSaga() {
  yield fork(getPrinters)
  yield takeEvery(INCREMENT_ASYNC_COUNTER, incrementAsync);
  yield takeEvery(PRINTER, printAsync);
}

export function* getPrinters() {
  let printers = yield call(asyncPrinters)
  yield put({ type: GET_PRINTERS, printers: printers })
}

export function* printAsync(action) {
  let {printerName, url} = action
  yield call(print, printerName, url)
}

function asyncPrinters() {
  return new Promise(resolve => {
    let win = gui.Window.get();
    win.getPrinters(resolve)
  })
}

function print(printerName, url) {
  return new Promise(resolve => {
    let opt = {
      window: {
        "show": true,
      }
    }

    gui.Window.open(url, {}, (new_win) => {
      new_win.print({
        autoprint: true, // do not display confirmation dialog
        headerFooterEnabled: false,
        printer: printerName,
        landscape: true,
        mediaSize:{
          name: 'CUSTOM', 
          width_microns: 210000, 
          height_microns: 140000, 
          custom_display_name: '连续打印纸', 
          is_default: true
        }
      })
      resolve()
    });
  });
}
