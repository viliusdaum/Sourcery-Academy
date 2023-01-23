import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from '~/components/Schedule/schedule.module.scss';
import ScheduleItem from '~/components/ScheduleItem/ScheduleItem';
import PropTypes from 'prop-types';
import { SCHEDULES } from '~/components/Schedule/schedulesData';
import { ACCENT_COLORS } from '~/constants';
import Particles from '~/components/Particles/Particles';
const cn = classNames.bind(styles);

const Schedule = ({ academySchedules, color }) => {
  return (
    <section className={cn('container', `container--${color}`)}>
      <Particles amount={5} />
      <span className={cn('container__title')}>Schedule</span>
      <div className={cn('schedule-container')}>
        {academySchedules.splitSchedules.map((splitScheduleData) => (
          <div key={splitScheduleData.title} className={cn('schedule-item')}>
            <span className={cn('schedule-item__title')}>
              {splitScheduleData.title}
            </span>
            <div className={cn('schedule-item__table')}>
              {splitScheduleData.subject.map((subject, i) => (
                <div
                  key={splitScheduleData.title + subject.column}
                  className={cn('schedule-col')}
                >
                  {subject.data.map((subjectItem) => (
                    <ScheduleItem
                      key={subjectItem.title}
                      color={color}
                      item={subjectItem}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Particles amount={4} />
    </section>
  );
};

Schedule.propTypes = {
  academySchedules: PropTypes.oneOf([
    SCHEDULES.DEVELOPERS,
    SCHEDULES.TESTERS,
    SCHEDULES.FRONT_END,
  ]),
  color: PropTypes.oneOf([
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
    ACCENT_COLORS.MINSK,
  ]),
};

export default Schedule;
