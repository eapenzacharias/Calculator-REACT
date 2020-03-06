import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { value } = props;
  return (
    <div className="display">{value}</div>
  );
}

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: null,
};
export default Display;
