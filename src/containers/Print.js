import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';

const listPrinter = (printers, print) => (
  <ul>
  {printers.map(printer => (
    <li key={printer.deviceName} >
      {printer.deviceName} 
      <button onClick={print.bind(this, printer.deviceName, 'https://cn.lipsum.com/feed/html')}>打印</button>
    </li>
  ))}
  </ul>
)

const Print = ({ print, printers, children }) => (
  <div>
    <Helmet>
      <title>Printer</title>
    </Helmet>  
    <h1>Printer</h1>
    {listPrinter(printers, print)}
  </div>
);

const mapStateToProps = state => ({
  printers: state.printer.printers,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

Print.defaultProps = {
  printers: []
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Print);
