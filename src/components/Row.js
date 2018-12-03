import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

const Row = props => {
  const row = props.row;
  return (
    <div className="row">
      {row.map(cell => (
        <Cell cell={cell} />
      ))}
    </div>
  );
};

export default Row;
