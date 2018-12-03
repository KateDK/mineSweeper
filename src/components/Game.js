import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initiateGame, dificulties } from '../store';
import Row from './Row';

class Game extends Component {
  componentDidMount() {
    this.props.initiateGame(dificulties.easy);
  }
  render() {
    const grid = this.props.grid;
    return (
      <div>
        {grid.map(row => (
          <Row />
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    grid: state.game.grid,
  };
};

const mapDispatch = dispatch => {
  return {
    initiateGame: dificulty => dispatch(initiateGame(dificulty)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Game);
