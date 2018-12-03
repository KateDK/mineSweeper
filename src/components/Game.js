import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initiateGame, dificulties } from '../store';
import Row from './Row';

class Game extends Component {
  componentDidMount() {
    this.props.initiateGame(dificulties.easy);
  }
  render() {
    const { grid, gameOver, gameWon } = this.props;
    return (
      <div>
        {gameOver ? <h1>Game Over, You Lose!</h1> : null}
        {gameWon ? <h1>Good Job, You Win!</h1> : null}
        {grid.map(row => (
          <Row row={row} />
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    grid: state.game.grid,
    gameOver: state.game.gameOver,
    gameWon: state.game.gameWon,
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
