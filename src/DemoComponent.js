import React from 'react';
import { connect } from 'react-redux';
import { getState } from './store';

const DemoComponent = props => (
  <div>
    <h1 onClick={props.handleClick}>{props.state.appReducer}</h1>
  </div>
);

const mapState = state => {
  return {
    state: state,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick: () => dispatch(getState()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(DemoComponent);
