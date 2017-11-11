import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <p>
    Clicked: {value} times
    {' '}
    <button onClick={onIncrement}>+</button>
    {' '}
    <button onClick={onDecrement}>-</button>
    {' '}
    <button onClick={onIncrementAsync}>+ async</button>
  </p>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;
