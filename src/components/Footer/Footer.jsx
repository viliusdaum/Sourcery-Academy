import React from 'react';
import { FOOTER } from '~/locale';
import Facebook from '~/assets/svg/facebook.svg';
import Twitter from '~/assets/svg/Twitter.svg';
import Instagram from '~/assets/svg/instagram.svg';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import IconLink from '~/components/IconLink/IconLink';

const cn = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cn('footer')}>
      <div className={cn('footer__social-links')}>
        <IconLink
          url="https://www.facebook.com/devbridge/"
          icon={<Facebook />}
        />
        <IconLink url="https://twitter.com/devbridge" icon={<Twitter />} />
        <IconLink
          url="https://www.instagram.com/devbridge/"
          icon={<Instagram />}
        />
      </div>
      <h4>{FOOTER.COPYRIGHT_TEXT}</h4>
    </footer>
  );
};

export default Footer;
