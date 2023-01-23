import React from 'react';
import styles from './Schedule.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { ADMISSION_DATES_HEADER } from '~/sass/utilities/locale.js';
import VerticalLine from './VerticalLine';

const cn = classNames.bind(styles);

const Schedule = ({ currentColor, currentAcademy }) => {
  const { id: colorId } = currentColor;
  return (
    <>
      <h2 className={cn(colorId)}>{ADMISSION_DATES_HEADER.HEADER}</h2>
      {Object.values(currentAcademy.dates).map(({ id, title, month, day }) => (
        <div key={id} className={cn('dates-info-wrapper', colorId)}>
          <p className={cn('dates-info-wrapper__dates')}>
            {month}
            <br></br>
            <span>{day}</span>
          </p>
          <VerticalLine color={currentColor} />
          <p className={cn('dates-info-wrapper__info')}>{title}</p>
        </div>
      ))}
    </>
  );
};

Schedule.propTypes = {
  currentAcademy: PropTypes.object,
  currentColor: PropTypes.object,
};
export default Schedule;
