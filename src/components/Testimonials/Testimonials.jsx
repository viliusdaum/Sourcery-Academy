import React, { useEffect, useState } from 'react';
import { useFetch } from '~/hooks/useFetch';
import { TESTIMONIALS_URL } from '~/api/apiRoutes';
import Spinner from '~/components/Spinner/Spinner';
import { validateAcademies } from '~/components/Testimonials/validateAcademies';
import PropTypes from 'prop-types';
import styles from './testimonials.module.scss';
import classNames from 'classnames/bind';
import { TESTIMONIALS_ACADEMIES } from '~/locale';
import { mapTestimonialsToAcademy } from '~/components/Testimonials/testimonialUtils';
import { ACCENT_COLORS } from '~/constants';
import Particles from '~/components/Particles/Particles';

const CARDS_AMOUNT = 3;
const cn = classNames.bind(styles);

const Testimonials = ({ academies, accentColor }) => {
  const [testimonialsData, setTestimonialsData] = useState(null);
  const { response, error } = useFetch(TESTIMONIALS_URL);

  useEffect(() => {
    if (response) {
      const filteredTestimonials = response.filter((testimonial) =>
        academies.includes(testimonial.academy)
      );
      let testimonials = [];

      if (academies.length > 1) {
        testimonials = mapTestimonialsToAcademy(
          academies,
          filteredTestimonials
        );
        setTestimonialsData(testimonials);
      } else if (academies.length === 1) {
        setTestimonialsData(filteredTestimonials.slice(0, CARDS_AMOUNT));
      }
    }
  }, [response]);

  if (!testimonialsData) {
    return <Spinner />;
  }

  return (
    <section className={cn('testimonials', `testimonials--${accentColor}`)}>
      <h2 className={cn('testimonials__title')}>
        <Particles
          classNames={cn('testimonials__title__particles')}
          amount={3}
        />{' '}
        {TESTIMONIALS_ACADEMIES.TESTIMONIALS}
      </h2>
      <article className={cn('testimonials__container')}>
        {testimonialsData.map(({ name, photo, message, academy }, index) => (
          <div
            className={cn('testimonial', `testimonial--${accentColor}`)}
            key={index}
          >
            <img
              src={photo}
              alt={`academy graduate ${name}`}
              className={cn('testimonial__photo')}
            />
            <div className={cn('testimonial__message')}>
              <q className={cn('testimonial__message-qoutes')}>
                <p className={cn('testimonial__message-text')}>{message}</p>
              </q>
            </div>
            <p className={cn('testimonial__name')}>{name}</p>
            <span className={cn('testimonial__academy')}>{academy}</span>
          </div>
        ))}
      </article>
      <Particles classNames={cn('testimonials__particles')} amount={6} />
    </section>
  );
};

Testimonials.propTypes = {
  academies: validateAcademies,
  accentColor: PropTypes.oneOf([
    ACCENT_COLORS.MINSK,
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
  ]),
};

export default Testimonials;
