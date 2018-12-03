import React from 'react';
import { connect } from 'react-redux';
import { clickCell } from '../store';

const insideCell = cell => {
  if (cell.isOpen) {
    if (cell.isMine) {
      return 'X';
    }
    if (cell.closeMines > 0) {
      return cell.closeMines;
    }
  }
};

const Cell = props => {
  const cell = props.cell;
  const clickCell = props.clickCell;

  return (
    <div
      className={cell.isOpen ? 'cell open' : 'cell'}
      onClick={() => clickCell(cell.row, cell.col)}
    >
      {insideCell(cell)}
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    clickCell: (row, col) => dispatch(clickCell(row, col)),
  };
};

export default connect(
  null,
  mapDispatch
)(Cell);
