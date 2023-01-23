import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.scss';

const cn = classNames.bind(styles);

const Layout = ({ header, footer, children }) => {
  return (
    <div className={cn('content-wrapper')}>
      <div className={cn('header')}>{header}</div>
      <main>{children}</main>
      <div className={cn('footer')}>{footer}</div>
    </div>
  );
};

Layout.propTypes = {
  children: propTypes.node,
  header: propTypes.node,
  footer: propTypes.node,
};

export default Layout;
