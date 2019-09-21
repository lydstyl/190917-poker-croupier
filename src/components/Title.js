import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Title = ({ round }) => {
  let style = { display: 'none' };
  if (!round) style = { display: 'block' };
  const title = <h1 style={style}>Poker Croupier</h1>;
  return title;
};

Title.propTypes = {
  round: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  round: state.card.round
});

export default connect(
  mapStateToProps,
  null
)(Title);
