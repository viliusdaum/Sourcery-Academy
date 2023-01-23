import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './academydescription.module.scss';
import Button from '~/components/Button/Button';
import SplineShape1 from '~/assets/svg/spline-shape6.svg';
import SplineShape2 from '~/assets/svg/spline-shape5.svg';
import PropTypes from 'prop-types';
import { useFetch } from '~/hooks/useFetch';
import { MEDIA_URL, TESTIMONIALS_URL } from '~/api/apiRoutes';
import Spinner from '~/components/Spinner/Spinner';
import { ACCENT_COLORS, BUTTON_STYLE, ID } from '~/constants';
import PlayVideo from '~/assets/svg/PlayVideo.svg';
import { SUB_PAGE_ROUTES } from '~/routes';
import { useNavigate } from 'react-router-dom';
import { ACADEMIES } from '~/locale';

const cn = classNames.bind(styles);

const AcademyDescription = ({ title, description, id, color }) => {
  const [academyData, setAcademyData] = useState(null);
  const { response, error } = useFetch(MEDIA_URL);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(SUB_PAGE_ROUTES.APPLICATION, {
      state: {
        id,
      },
    });
  };

  const buttonStyle = () => {
    let btnStyle;
    switch (color) {
      case ACCENT_COLORS.MISNK:
        btnStyle = BUTTON_STYLE.DODGER_BLUE;
        break;
      case ACCENT_COLORS.COBALT:
        btnStyle = BUTTON_STYLE.CORNFLOWER_BLUE_LIGHT;
        break;
      case ACCENT_COLORS.DEEP_GREEN:
        btnStyle = BUTTON_STYLE.PERSIAN_GREEN;
        break;
      case ACCENT_COLORS.MONZA:
        btnStyle = BUTTON_STYLE.AMARANTH;
        break;
    }

    return btnStyle;
  };

  useEffect(() => {
    if (response) {
      const filteredData = response.find(
        (res) => res.academy === id && res.type === 'video'
      );
      setAcademyData(filteredData);
    }
  }, [response]);

  return (
    <div className={cn('description')}>
      <div className={cn('content-container')}>
        <span
          className={cn(
            'content-container__topic',
            `content-container__topic--${color}`
          )}
        >
          {title}
        </span>
        <p className={cn('content-container__content')}>{description}</p>
        <Button
          value="Register"
          buttonStyle={buttonStyle()}
          onClick={handleBtnClick}
        />
        <div className={cn('spline-wrapper')}>
          <SplineShape1
            className={cn('content-container__spline', `spline--${color}`)}
          />
        </div>
      </div>
      <div className={cn('img-container')}>
        <div className={cn('img-container-wrapper')}>
          {academyData ? (
            <>
              <img
                src={academyData.thumbnail}
                className={cn('img-container-wrapper__image')}
                alt={`Image of Sourcery Academy for ${id} gathering.`}
              />
              <PlayVideo className={cn('play-video', `play-video--${color}`)} />
            </>
          ) : (
            <Spinner color={color} />
          )}
        </div>
        <SplineShape2
          className={cn('img-container__spline', `spline--${color}`)}
        />
      </div>
    </div>
  );
};

AcademyDescription.propTypes = {
  title: PropTypes.oneOf([
    ACADEMIES.DEVELOPERS.TITLE,
    ACADEMIES.TESTERS.TITLE,
    ACADEMIES.FRONT_END.TITLE,
  ]),
  description: PropTypes.oneOf([
    ACADEMIES.DEVELOPERS.DESCRIPTION,
    ACADEMIES.TESTERS.DESCRIPTION,
    ACADEMIES.FRONT_END.DESCRIPTION,
  ]),
  id: PropTypes.oneOf([ID.DEVELOPERS, ID.TESTERS, ID.FRONT_END]),
  color: PropTypes.oneOf([
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
    ACCENT_COLORS.MISNK,
  ]),
};

export default AcademyDescription;
