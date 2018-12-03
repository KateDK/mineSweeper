import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initiateGame, dificulties } from '../store';

class Game extends Component {
  componentDidMount() {
    this.props.initiateGame(dificulties.easy);
  }
  render() {
    return <h1>IM THE GAME!!!</h1>;
  }
}

const mapDispatch = dispatch => {
  return {
    initiateGame: dificulty => dispatch(initiateGame(dificulty)),
  };
};
export default connect(
  null,
  mapDispatch
)(Game);
