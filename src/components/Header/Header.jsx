import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import SourceryLogo from '~/assets/svg/sourcery-logo.svg';
import Navigation from '../Navigation/Navigation.jsx';
import { PAGE_ROUTES } from '~/routes.js';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cn('header')}>
      <Link to={PAGE_ROUTES.HOME}>
        <div className={cn('header__logo-container')}>
          <SourceryLogo />
          <h3>Sourcery Academy</h3>
        </div>
      </Link>
      <Navigation />
    </header>
  );
};
export default Header;
