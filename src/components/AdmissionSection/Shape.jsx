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
      className={cn('shape')}
      key={id}
      width="471"
      height="784"
      viewBox="0 0 471 784"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M461.999 0.499023C310.879 324.178 115.013 254.517 35.0317 393.056C-44.9493 531.595 27.1787 649.456 136.157 678.656C245.135 707.856 377.499 628.499 469.499 782.499"
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
