import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import PropTypes from 'prop-types';
import { ACADEMIES, BUTTON_STYLE } from '~/constants';
import { SUB_PAGE_ROUTES } from '~/routes';
const cn = classNames.bind(styles);

const Button = ({ value, buttonStyle, onClick }) => {
  return (
    <button onClick={onClick} className={cn('button', buttonStyle)}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  buttonStyle: PropTypes.oneOf([
    BUTTON_STYLE.DODGER_BLUE,
    BUTTON_STYLE.CORNFLOWER_BLUE_LIGHT,
    BUTTON_STYLE.PERSIAN_GREEN,
    BUTTON_STYLE.AMARANTH,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: 'learn more',
  buttonStyle: BUTTON_STYLE.DODGER_BLUE,
};

export default Button;
