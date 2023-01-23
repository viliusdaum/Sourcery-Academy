import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';
import HamburgerMenuItem from './HamburgerMenuItem';
import { navigationConfig } from '~/components/Navigation/NavigationData';
import MenuIcon from '~/assets/svg/hamburger-menu-icon.svg';
import { useScrollLock } from '~/hooks/useScrollLock.js';
import CloseIcon from '~/assets/svg/icon-close.svg';

const cn = classNames.bind(styles);

const Navigation = () => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isActive, setIsActive] = useState();
  const handleClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    lockScroll();
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsActive(isActive);
        unlockScroll();
        window.removeEventListener('resize', handleResize);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      unlockScroll();
    };
  };
  const handleClickClose = () => {
    unlockScroll();
    setIsActive(!isActive);
  };
  const HamburgerContainerContentClass = cn('hamburger-container', {
    active: isActive,
  });
  const HamburgerMenuContentClass = cn('hamburger-container__hamburger-list', {
    active: isActive,
  });
  const MenuCloseIconClass = cn('nav-container__menu-close-icon', {
    active: isActive,
  });

  return (
    <nav className={cn('nav-container')}>
      <MenuIcon
        onClick={handleClick}
        className={cn('nav-container__menu-icon')}
      />
      <CloseIcon onClick={handleClickClose} className={MenuCloseIconClass} />
      <div className={HamburgerContainerContentClass}>
        <ul className={HamburgerMenuContentClass}>
          {navigationConfig.map((item) => (
            <HamburgerMenuItem
              key={item.id}
              title={item.title}
              to={item.to}
              subItems={item.subItems}
            />
          ))}
        </ul>
      </div>
      <ul className={cn('nav-container__list')}>
        {navigationConfig.map((item) => (
          <NavigationItem
            key={item.id}
            title={item.title}
            to={item.to}
            subItems={item.subItems}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
