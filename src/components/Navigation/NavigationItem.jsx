import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.scss';
import ArrowDown from '~/assets/svg/arrow-down.svg';
import { useDetectOutsideClick } from '~/hooks/useDetectOutsideClick.js';

const cn = classNames.bind(styles);

const NavigationItem = ({ to, title, subItems }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };
  const dropdownContentClass = cn('dropdown-content', { active: isActive });
  const dropdownTriggerClass = cn('dropdown__trigger', { active: isActive });

  return (
    <>
      {subItems ? (
        <li className={cn('dropdown')}>
          <button onClick={handleClick} className={dropdownTriggerClass}>
            {title}
            <ArrowDown />
          </button>
          <ul ref={dropdownRef} className={dropdownContentClass}>
            <div className={cn('dropdown-content__square')}></div>
            {subItems.map(({ id, to, title }) => (
              <NavigationItem key={id} to={to} title={title} />
            ))}
          </ul>
        </li>
      ) : (
        <NavLink to={to}>
          <li onClick={handleClick}>{title}</li>
        </NavLink>
      )}
    </>
  );
};

NavigationItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  subItems: PropTypes.array,
};
export default NavigationItem;
