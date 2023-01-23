import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './academiescontent.module.scss';
import Particles from '~/components/Particles/Particles';
import Button from '~/components/Button/Button';
import { academiesDataConfig } from '~/components/AcademiesContent/academiesData';
import { useNavigate } from 'react-router-dom';

const cn = classNames.bind(styles);

const AcademiesContent = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleBtnClick = (route) => {
    navigate(route);
  };

  return (
    <div className={cn('academies')}>
      {academiesDataConfig.map(
        ({ title, description, Svg, ShapeSvg, id, route }, i) => {
          return (
            <div
              id={id}
              ref={i === 0 ? ref : null}
              className={cn('academies__item')}
              key={id}
            >
              <div className={cn('content-container')}>
                <Particles
                  amount={3}
                  classNames={cn('content-container__particles-first')}
                />
                <span className={cn('content-container__topic')}>{title}</span>
                <p className={cn('content-container__content')}>
                  {description}
                </p>
                <div className={cn('content-container__button-container-main')}>
                  <Button onClick={() => handleBtnClick(route)} />
                </div>
                <Particles
                  amount={5}
                  classNames={cn('content-container__particles-secondary')}
                />
              </div>
              <div className={cn('img-container')}>
                <Svg className={cn('img-container__image')} />
                {ShapeSvg ? (
                  <ShapeSvg className={cn('img-container__shape')} />
                ) : null}
                <div
                  className={cn('img-container__button-container-secondary')}
                >
                  <Button onClick={() => handleBtnClick(route)} />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
});

AcademiesContent.displayName = 'Academies Content component';

export default AcademiesContent;
