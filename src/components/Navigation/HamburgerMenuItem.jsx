import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';

const HamburgerMenuItem = ({ to, title, subItems }) => {
  return subItems ? (
    subItems.map(({ id, to, title }) => (
      <NavigationItem key={id} to={to} title={title} />
    ))
  ) : (
    <NavigationItem to={to} title={title} />
  );
};
HamburgerMenuItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  subItems: PropTypes.array,
};
export default HamburgerMenuItem;
