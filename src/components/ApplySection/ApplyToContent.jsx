import React from 'react';
import styles from './ApplyToContent.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import STYLE_MAPPER from './ApplyToData';
import Button from '../Button/Button';
import Particles from '../Particles/Particles';
import { ACCENT_COLORS, ID } from '~/constants';
import { SUB_PAGE_ROUTES } from '~/routes';
import { useNavigate } from 'react-router-dom';

const cn = classNames.bind(styles);

const ApplyContent = ({ color, title, text, buttonStyle, id }) => {
  const { SvgComp, SvgShape } = STYLE_MAPPER[color];

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(SUB_PAGE_ROUTES.APPLICATION, {
      state: {
        id,
      },
    });
  };
  return (
    <div className={cn('apply-section', `apply-section--${color}`)}>
      <div className={cn('content-container')}>
        <h1 className={cn('content-container__title')}>{title}</h1>
        <p className={cn('content-container__text')}>{text}</p>
        <Button
          value="Apply now"
          buttonStyle={buttonStyle}
          onClick={handleBtnClick}
        />
        <Particles amount={5} />
      </div>
      <div className={cn('img-container')}>
        <Particles amount={3} />
        <SvgComp className={cn('img-container__img')} />
        <SvgShape className={cn('img-container__shape')} />
      </div>
    </div>
  );
};

ApplyContent.propTypes = {
  color: PropTypes.oneOf([
    ACCENT_COLORS.COBALT,
    ACCENT_COLORS.DEEP_GREEN,
    ACCENT_COLORS.MONZA,
  ]).isRequired,
  id: PropTypes.oneOf([ID.DEVELOPERS, ID.TESTERS, ID.FRONT_END]),
  title: PropTypes.string,
  text: PropTypes.string,
  buttonStyle: PropTypes.string,
};
export default ApplyContent;
