import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

const Button = ({ onButtonClick, children }) => {
  return <ButtonStyled onClick={onButtonClick}>{children}</ButtonStyled>;
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
