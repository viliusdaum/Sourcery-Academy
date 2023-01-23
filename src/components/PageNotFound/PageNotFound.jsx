import React from 'react';
import classNames from 'classnames/bind';
import styles from '~/components/pagenotfound/pagenotfound.module.scss';
import NotFoundIcon from '~/assets/svg/404.svg';

const cn = classNames.bind(styles);

const PageNotFound = () => {
  return (
    <section className={cn('container')}>
      <NotFoundIcon className={cn('container__icon')} />
      <h1 className={cn('container__title')}>Ooops!</h1>
      <p className={cn('container__message')}>
        We&apos;re sorry, the page you requested could not be found.
      </p>
    </section>
  );
};

export default PageNotFound;
