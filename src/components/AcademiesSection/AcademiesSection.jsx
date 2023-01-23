import React from 'react';
import styles from './AcademiesSection.module.scss';
import classNames from 'classnames/bind';
import '~/sass/global.scss';
import { useRef } from 'react';
import VerticalLine from '~/assets/svg/VerticalLine.svg';
import AcademiesParticles from '~/assets/svg/AcademiesParticles.svg';
import IconFeatherArrowDownCircle from '~/assets/svg/IconFeatherArrowDownCircle.svg';
import { ACADEMIES } from '~/sass/utilities/locale.js';
import { scrollToElement } from '~/utils/index';
import AcademiesContent from '~/components/AcademiesContent/AcademiesContent';

const cn = classNames.bind(styles);

const AcademiesSection = () => {
  const academiesScrollItem = useRef(null);

  return (
    <section className={cn('academies')}>
      <header className={cn('academies__header')}>
        <AcademiesParticles className={cn('academies__particles')} />
        <h2 className={cn('academies__title')}>{ACADEMIES.TITLE}</h2>
        <p className={cn('academies__text')}>{ACADEMIES.TEXT}</p>
        <div className={cn('academies__line-spacer')}>
          <VerticalLine />
        </div>
        <button
          onClick={() => scrollToElement(academiesScrollItem)}
          className={cn('academies__scroll-item')}
        >
          <IconFeatherArrowDownCircle />
        </button>
      </header>
      <AcademiesContent ref={academiesScrollItem} />
    </section>
  );
};

AcademiesSection.displayName = 'Academies Section component';

export default AcademiesSection;
