import React, { useEffect, useState } from 'react';
import styles from './MediaSection.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { MEDIA } from '~/sass/utilities/locale.js';
import SplineShape4 from '~/assets/svg/SplineShape4.svg';
import { MEDIA_URL } from '../../api/apiRoutes';
import Particles from '~/components/Particles/Particles';
import { ACCENT_COLORS, ID } from '~/constants';
import Spinner from '~/components/Spinner/Spinner';
import { useFetch } from '~/hooks/useFetch';

const cn = classNames.bind(styles);
const MEDIA_AMOUNT = 8;

const MediaSection = ({ academyName, accentColor }) => {
  const [academyData, setAcademyData] = useState(null);
  const { response, error } = useFetch(MEDIA_URL);

  useEffect(() => {
    if (response) {
      if (academyName) {
        const filteredData = response.filter(
          (res) => res.academy === academyName
        );
        setAcademyData(filteredData.slice(0, MEDIA_AMOUNT));
      } else {
        setAcademyData(response.slice(0, MEDIA_AMOUNT));
      }
    }
  }, [response]);

  return (
    <section className={cn('medias')}>
      <SplineShape4
        className={cn('medias__shape4', `shape4--${accentColor}`)}
      />

      {/*<h2 className={cn('medias__title', `medias__title--${accentColor}`)}>*/}
      {/*  {MEDIA.TITLE}*/}
      {/*  <Particles className={cn('medias__particles')} amount={5} />*/}
      {/*</h2>*/}
      <div className={cn('medias-head-wrapper')}>
        <Particles className={cn('medias__particles')} amount={5} />
        <h2 className={cn('medias__title', `medias__title--${accentColor}`)}>
          {MEDIA.TITLE}
        </h2>
      </div>

      <article className={cn('medias__container')}>
        {academyData &&
          academyData.map(({ thumbnail, academy }, index) => (
            <div className={cn('media', `media--${accentColor}`)} key={index}>
              <img
                src={thumbnail}
                alt={`moments from ${academy} academy`}
                className={cn('media__photo')}
              />
            </div>
          ))}
        {!academyData && <Spinner color={accentColor} />}
      </article>
    </section>
  );
};

MediaSection.propTypes = {
  accentColor: PropTypes.oneOf([
    ACCENT_COLORS.MINSK,
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
  ]),
  academyName: PropTypes.oneOf([ID.DEVELOPERS, ID.TESTERS, ID.FRONT_END]),
};

export default MediaSection;
