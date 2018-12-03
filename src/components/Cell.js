import React from 'react';
import { connect } from 'react-redux';
import { clickCell } from '../store';

const Cell = props => {
  const cell = props.cell;
  const clickCell = props.clickCell;
  return (
    <div className="cell" onClick={() => clickCell(cell.row, cell.col)}>
      {cell.isMine ? 'X' : cell.closeMines}
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
