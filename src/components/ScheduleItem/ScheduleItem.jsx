import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '~/components/ScheduleItem/scheduleitem.module.scss';
import ArrowIcon from '~/assets/svg/arrow-icon.svg';
import PersonIcon from '~/assets/svg/person-icon.svg';
import ClockIcon from '~/assets/svg/clock-icon.svg';
import VerticalLine from '~/assets/svg/vertical-line.svg';
import LocationIcon from '~/assets/svg/location-icon.svg';
import VerticalLine2 from '~/assets/svg/vertical-line2.svg';
import PropTypes from 'prop-types';
import { SCHEDULES } from '~/components/Schedule/schedulesData';
import { ACCENT_COLORS } from '~/constants';

const cn = classNames.bind(styles);

const ScheduleItem = ({ item, color }) => {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef(null);
  const arrowWrapperEl = useRef(null);
  const subjectLocRef = useRef(null);

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
      contentEl.current.style.display = 'none';
      contentEl.current.parentElement.style.borderRadius = '10px';
      subjectLocRef.current.style.display = 'none';
      arrowWrapperEl.current.children[0].style.transform = 'rotate(0deg)';
    } else {
      setIsActive(true);
      arrowWrapperEl.current.children[0].style.transform = 'rotate(180deg)';
      contentEl.current.parentElement.style.borderRadius = '10px 10px 0 10px';
      subjectLocRef.current.style.display = 'flex';
      contentEl.current.style.display = 'flex';
    }
  };

  return (
    <div className={cn('subject-wrapper', `subject-wrapper--${color}`)}>
      <div className={cn('subject', `subject--${color}`)}>
        <div className={cn('subject-head')}>
          <span className={cn('subject-head__title')}>{item.title}</span>
          <div ref={arrowWrapperEl} className={cn('svg-wrapper')}>
            <ArrowIcon
              onClick={handleClick}
              className={cn('subject-head__icon')}
            />
          </div>
        </div>
        <div ref={contentEl} className={cn('subject-content')}>
          <div className={cn('inline-wrapper')}>
            <div className={cn('svg-wrapper')}>
              <PersonIcon className={cn('subject-content__person-icon')} />
            </div>
            <span className={cn('subject-content__lecturer-text')}>
              {item.lecturer}
            </span>
          </div>
          <div className={cn('inline-wrapper')}>
            <ClockIcon className={cn('subject-content__clock-icon')} />
            <span className={cn('subject-content__start')}>
              {item.startTime}
            </span>
            <VerticalLine className={cn('subject-content__vertical-line')} />
            <span className={cn('subject-content__duration')}>
              {item.duration}
            </span>
          </div>
        </div>
      </div>
      <div
        ref={subjectLocRef}
        className={cn('location-wrapper', `location-wrapper--${color}`)}
      >
        {item.date.map((dateItem) => (
          <div
            key={dateItem.month + dateItem.city + dateItem.day}
            className={cn('location')}
          >
            <div className={cn('location-date')}>
              <span className={cn('location-date__month')}>
                {dateItem.month}
              </span>
              <span className={cn('location-date__day')}>{dateItem.day}</span>
            </div>
            <VerticalLine2
              className={cn(
                'location__vertical-line',
                `location__vertical-line--${color}`
              )}
            />
            <div className={cn('location-container')}>
              <LocationIcon
                className={cn(
                  'location-container__icon',
                  `location-container__icon--${color}`
                )}
              />
              <span className={cn('location-container__city')}>
                {dateItem.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ScheduleItem.propTypes = {
  item: PropTypes.object,
  color: PropTypes.oneOf([
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
    ACCENT_COLORS.MINSK,
  ]),
};

export default ScheduleItem;
