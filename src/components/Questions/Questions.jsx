import React from 'react';
import classNames from 'classnames/bind';
import styles from '~/components/Questions/questions.module.scss';
import Particles from '~/components/Particles/Particles';

const cn = classNames.bind(styles);

const Questions = () => {
  return (
    <section className={cn('container')}>
      <Particles amount={10} />
      <h1 className={cn('container__title')}>
        If you have any questions, we are all ears!
      </h1>
      <p>
        In addition, you can contact our lovely mentor{' '}
        <b>Laurynas Aukštuolis</b> on Slack or e-mail.
      </p>
      <Particles amount={9} />
    </section>
  );
};

export default Questions;
