import React from 'react';
import styles from './AdmissionContent.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

const AdmissionContent = ({ currentAcademy, currentColor }) => {
  const { id: colorId } = currentColor;
  const { id: academyId } = currentAcademy;
  return Object.values(currentAcademy.content).map(
    ({
      header,
      subHeader,
      introText,
      subHeader2,
      list,
      subHeader3,
      interviewText,
    }) => (
      <div key={academyId} className={cn('admission-content', colorId)}>
        <h1 className={cn('admission-content__header')}>{header}</h1>
        <h2 className={cn('admission-content__sub-header')}>{subHeader}</h2>
        <p className={cn('admission-content__text')}>{introText}</p>
        <h2 className={cn('admission-content__header')}>{subHeader2}</h2>
        <ul className={cn('admission-content__list')}>
          {list.map(({ id, listText }) => (
            <li key={id}>
              <sup>{listText}</sup>
            </li>
          ))}
        </ul>
        <h2 className={cn('admission-content__header')}>{subHeader3}</h2>
        <p className={cn('admission-content__text')}>{interviewText}</p>
      </div>
    )
  );
};
AdmissionContent.propTypes = {
  currentAcademy: PropTypes.object,
  currentColor: PropTypes.object,
};

export default AdmissionContent;
