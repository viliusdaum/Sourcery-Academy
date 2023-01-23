import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cn = classNames.bind();

const Oval = ({ color }) => {
  const {
    colors: [{ id, primary }],
  } = color;
  return (
    <svg
      className={cn('academy4__img-container--oval')}
      key={id}
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 158.999C123.63 158.999 159 123.63 159 79.9993C159 36.3688 123.63 0.999268 80 0.999268C36.3695 0.999268 1 36.3688 1 79.9993C1 123.63 36.3695 158.999 80 158.999Z"
        stroke={primary}
        strokeWidth="2"
      />
    </svg>
  );
};

Oval.propTypes = {
  color: PropTypes.object,
};

export default Oval;
