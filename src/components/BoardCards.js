import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BoardCard from './BoardCard';

const BoardCards = ({ round, flop, turn, river }) => {
  let htmlFlop, htmlTurn, htmlRiver;
  if (round > 1) {
    htmlFlop = flop.map(card => (
      <Fragment key={card}>
        <BoardCard name={card} />
      </Fragment>
    ));
  }
  if (round > 2) {
    htmlTurn = <BoardCard name={turn} />;
  }
  if (round > 3) {
    htmlRiver = <BoardCard name={river} />;
  }

  return (
    <div className='board'>
      {htmlFlop}
      {htmlTurn}
      {htmlRiver}
    </div>
  );
};

BoardCards.propTypes = {
  flop: PropTypes.array,
  turn: PropTypes.string,
  river: PropTypes.string
};

const mapStateToProps = state => ({
  round: state.card.round,
  flop: state.card.flop,
  turn: state.card.turn,
  river: state.card.river
});

export default connect(
  mapStateToProps,
  null
)(BoardCards);
