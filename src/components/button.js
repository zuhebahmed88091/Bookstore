import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, label }) => (
  <button type="button" onClick={onClick} className={className}>
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
