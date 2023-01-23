import React from 'react';
import PropTypes from 'prop-types';

const VerticalLine = ({ color }) => {
  const {
    colors: [{ id, primary }],
  } = color;
  return (
    <svg
      key={id}
      width="2"
      height="38"
      viewBox="0 0 2 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00012 1.5V36.5"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

VerticalLine.propTypes = {
  color: PropTypes.object,
};

export default VerticalLine;
