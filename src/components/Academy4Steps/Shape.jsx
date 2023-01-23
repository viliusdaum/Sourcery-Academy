import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cn = classNames.bind();

const Shape = ({ color }) => {
  const {
    colors: [{ id, primary }],
  } = color;
  return (
    <svg
      className={cn('academy4-shape')}
      key={id}
      width="74"
      height="632"
      viewBox="0 0 74 632"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73 631.499C-5.5 485.499 -27.5 284.999 47.5003 0.999268"
        stroke={primary}
        strokeWidth="2"
      />
    </svg>
  );
};

Shape.propTypes = {
  color: PropTypes.object,
};

export default Shape;
