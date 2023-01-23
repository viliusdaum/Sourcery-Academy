import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './IconLink.module.scss';

const cn = classNames.bind(styles);

const IconLink = ({ url, icon }) => {
  return (
    <a href={url} rel="noreferrer" target="_blank" className={cn('icon-link')}>
      {icon}
    </a>
  );
};

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default IconLink;
