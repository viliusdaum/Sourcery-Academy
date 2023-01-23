import React from 'react';
import classNames from 'classnames/bind';
import styles from '~/components/Spinner/spinner.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

const Spinner = ({ color }) => {
  return (
    <div className={cn('wrapper')}>
      <div className={cn('spinner', `spinner--${color}`)} />
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.oneOf(['minsk', 'cobalt', 'deep-green', 'monza']),
};

Spinner.defaultProps = {
  color: 'minsk',
};

export default Spinner;
