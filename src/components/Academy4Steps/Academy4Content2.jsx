import React from 'react';
import styles from './Academy4Content.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

const Academy4Content2 = ({ currentAcademy, currentColor }) => {
  const { id: colorId } = currentColor;
  const { id: academyId } = currentAcademy;
  return Object.values(currentAcademy.content).map(({ title2, text2 }) => (
    <div key={academyId} className={cn('academy4-content', colorId)}>
      <h2 className={cn('academy4-content__title2')}>{title2}</h2>
      <p className={cn('academy4-content__text2')}>{text2}</p>
    </div>
  ));
};
Academy4Content2.propTypes = {
  currentAcademy: PropTypes.object,
  currentColor: PropTypes.object,
};

export default Academy4Content2;
