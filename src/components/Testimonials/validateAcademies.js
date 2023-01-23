import { TESTIMONIALS_ACADEMIES } from '~/locale';

const SINGLE_ACADEMY_AMOUNT = 1;
const ACADEMIES_AMOUNT = 3;

export const validateAcademies = (props, propName, component) => {
  if (props[propName]) {
    let value = props[propName];
    if (
      Object.prototype.toString.call(value) === '[object Array]' &&
      (value.length === SINGLE_ACADEMY_AMOUNT ||
        value.length === ACADEMIES_AMOUNT)
    ) {
      const compareArray = [
        TESTIMONIALS_ACADEMIES.TESTERS,
        TESTIMONIALS_ACADEMIES.FRONT_END,
        TESTIMONIALS_ACADEMIES.DEVELOPER,
      ];

      for (let i = 0; i < value.length; i++) {
        if (
          value[i] === TESTIMONIALS_ACADEMIES.TESTERS ||
          value[i] === TESTIMONIALS_ACADEMIES.FRONT_END ||
          value[i] === TESTIMONIALS_ACADEMIES.DEVELOPER
        ) {
          compareArray.splice(compareArray.indexOf(value[i]));
        } else return errorMessage(propName, component);
      }
      return null;
    }
  }

  return errorMessage(propName, component);
};

const errorMessage = (propName, component) => {
  return new Error(propName + ' in ' + component + ' is not valid.');
};
