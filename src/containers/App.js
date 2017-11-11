import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as CounterActions from '../actions';
import Counter from '../components/Counter';

const App = ({ counter, increment, decrement, incrementAsync, children }) => (
  <div className="App">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/print">Print</Link></li>      
    </ul>
    <Counter
      value={counter}
      onIncrement={increment}
      onDecrement={decrement}
      onIncrementAsync={incrementAsync}
    />
    <hr />
    {children}
  </div>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
