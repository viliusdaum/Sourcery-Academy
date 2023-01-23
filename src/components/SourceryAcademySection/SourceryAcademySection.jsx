import React from 'react';
import styles from './sourceryAcademySection.module.scss';
import classNames from 'classnames/bind';
import '~/sass/global.scss';
import { SOURCERYACADEMY } from '~/sass/utilities/locale.js';
import Button from '~/components/Button/Button';
import SvgHomeSourcery from '../../assets/svg/HomeSourcery.svg';
import { ACADEMIES_SCROLL_ID } from '~/constants';

const cn = classNames.bind(styles);

const SourceryAcademySection = () => {
  const handleBtnClick = () => {
    const academyElement = document.getElementById(ACADEMIES_SCROLL_ID);

    window.scrollTo({
      top: academyElement.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className={cn('sourceryacademy')}>
      <div className={cn('sourceryacademy__container--text')}>
        <h1 className={cn('sourceryacademy__title')}>
          {SOURCERYACADEMY.TITLE}
        </h1>
        <p className={cn('sourceryacademy__text')}>{SOURCERYACADEMY.TEXT}</p>
        <Button value="View academies" onClick={handleBtnClick} />
      </div>
      <div className={cn('sourceryacademy__container--img')}>
        <SvgHomeSourcery className={cn('sourceryacademy__image')} />
      </div>
    </section>
  );
};

SourceryAcademySection.displayName = 'Sourcery Academy section component';
export default SourceryAcademySection;
