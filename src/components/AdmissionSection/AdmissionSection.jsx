import React from 'react';
import styles from './AdmissionSection.module.scss';
import classNames from 'classnames/bind';
import Illustration from './Illustration';
import Particles from '~/components/Particles/Particles';
import Schedule from './Schedule';
import AdmissionContent from './AdmissionContent';
import Shape from './Shape';
import PropTypes from 'prop-types';
import { dataConfig } from '~/components/AdmissionSection/admissionData';
import { colorConfig } from '~/components/AdmissionSection/admissionColorData';
import { ACCENT_COLORS, ID } from '~/constants';

const cn = classNames.bind(styles);

const AdmissionSection = ({ accentColor, academy }) => {
  const currentColor = colorConfig.find((item) => item.id === accentColor);
  const currentAcademy = dataConfig.find((element) => element.id === academy);
  return (
    <section className={cn('admission')}>
      <div className={cn('admission__content')}>
        <AdmissionContent
          currentAcademy={currentAcademy}
          currentColor={currentColor}
        />
      </div>
      <div className={cn('admission__dates-content')}>
        <Particles
          amount={6}
          classNames={cn('admission__dates-content__particles')}
        />
        <Shape color={currentColor} />
        <div className={cn('dates')}>
          <Schedule
            currentColor={currentColor}
            currentAcademy={currentAcademy}
          />
        </div>
        <div className={cn('image-container')}>
          <Illustration color={currentColor} />
        </div>
      </div>
    </section>
  );
};
AdmissionSection.propTypes = {
  academy: PropTypes.oneOf([ID.FRONT_END, ID.DEVELOPERS, ID.TESTERS]),
  accentColor: PropTypes.oneOf([
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
  ]),
};

export default AdmissionSection;
