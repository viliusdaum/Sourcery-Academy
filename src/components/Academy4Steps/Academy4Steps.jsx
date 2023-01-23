import React from 'react';
import classNames from 'classnames/bind';
import styles from './academy4Steps.module.scss';
import PropTypes from 'prop-types';
import Particles from '../Particles/Particles';
import { ACCENT_COLORS, ID } from '~/constants';
import { colorConfig } from './academy4ColorData';
import { dataConfig } from './academy4Data';
import Academy4Content1 from './Academy4Content1';
import Academy4Content2 from './Academy4Content2';
import Academy4Content3 from './Academy4Content3';
import Academy4Content4 from './Academy4Content4';
import Step1 from '/src/assets/svg/Steps-1.svg';
import Step2 from '/src/assets/svg/Steps-2.svg';
import Step3 from '/src/assets/svg/Steps-3.svg';
import Step4 from '/src/assets/svg/Steps-4.svg';
import Shape from './Shape';
import Oval from './Oval';

const cn = classNames.bind(styles);

const Academy4Steps = ({ accentColor, academy }) => {
  const currentColor = colorConfig.find((item) => item.id === accentColor);
  const currentAcademy = dataConfig.find((element) => element.id === academy);

  return (
    <section className={cn('academy4')}>
      <Particles classNames={cn('academy4__particles')} amount={5} />
      <div className={cn('academy4__container')}>
        <Shape color={currentColor} />
        <div className={cn('academy4__content-container')}>
          <Academy4Content1
            currentAcademy={currentAcademy}
            currentColor={currentColor}
          />
          <div className={cn('academy4__img-container')}>
            <div className={cn('academy4__img1')}>
              <Oval color={currentColor} />
              <Step1
                className={cn(
                  'academy4__img-container--step1',
                  `academy4__img-container--${accentColor}`
                )}
              />
            </div>
          </div>
          <Academy4Content2
            currentAcademy={currentAcademy}
            currentColor={currentColor}
          />
          <div className={cn('academy4__img-container')}>
            <div className={cn('academy4__img2')}>
              <Oval color={currentColor} />
              <Step2
                className={cn(
                  'academy4__img-container--step2',
                  `academy4__img-container--${accentColor}`
                )}
              />
            </div>
          </div>
          <Academy4Content3
            currentAcademy={currentAcademy}
            currentColor={currentColor}
          />
          <div className={cn('academy4__img-container')}>
            <div className={cn('academy4__img3')}>
              <Oval color={currentColor} />
              <Step3
                className={cn(
                  'academy4__img-container--step3',
                  `academy4__img-container--${accentColor}`
                )}
              />
            </div>
          </div>
          <Academy4Content4
            currentAcademy={currentAcademy}
            currentColor={currentColor}
          />
          <div className={cn('academy4__img-container')}>
            <div className={cn('academy4__img4')}>
              <Oval color={currentColor} />
              <Step4
                className={cn(
                  'academy4__img-container--step4',
                  `academy4__img-container--${accentColor}`
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <Particles classNames={cn('academy4__particles')} amount={6} />
    </section>
  );
};

Academy4Steps.propTypes = {
  academy: PropTypes.oneOf([ID.DEVELOPERS, ID.TESTERS, ID.FRONT_END]),
  accentColor: PropTypes.oneOf([
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
  ]),
};
export default Academy4Steps;
