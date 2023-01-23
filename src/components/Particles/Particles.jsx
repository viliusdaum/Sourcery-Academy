import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from '../Particles/particles.module.scss';
import { particleIdentifierGenerator } from '~/components/Particles/particleIdentifierGenerator';
import { rangeTo } from '~/components/Particles/propsValidation';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

const Particles = ({ amount, classNames }) => {
  const particleIdentifier = useMemo(
    () => particleIdentifierGenerator(amount),
    [amount]
  );
  return (
    <div className={cn('particles', classNames)}>
      {Array.from(Array(amount).keys()).map((amount, i) => {
        return (
          <svg
            key={`particle-${amount}-${
              particleIdentifier[i]
            }-${new Date().getTime()}`}
            className={cn(
              'particles__particle',
              `particles--particleMod-${particleIdentifier[i]}`
            )}
          />
        );
      })}
    </div>
  );
};

Particles.propTypes = {
  amount: rangeTo,
  classNames: PropTypes.string,
};

export default Particles;
