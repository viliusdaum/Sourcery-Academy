import React from 'react';
import RightGraphic from '/src/assets/svg/RightGraphic.svg';
import styles from './application.module.scss';
import classNames from 'classnames/bind';
import Particles from '~/components/Particles/Particles';
import { APPLICATION } from '../../locale';

const cn = classNames.bind(styles);

const ApplicationPage = () => {
  return (
    <>
      <section className={cn('application')}>
        <div className={cn('application__content')}>
          <Particles amount={4} classNames={cn('application__content__particles')} />
          <h2>{APPLICATION.TEXT}</h2>
          <Particles amount={4} classNames={cn('application__content__particles')} />
        </div>
        <RightGraphic className={cn('application__img')} />
      </section>
    </>
  );
};

export default ApplicationPage;
