export const rangeTo = (props, propName, component) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
      return value >= 1 && value <= 20
        ? null
        : errorMessage(propName, component);
    }
  }

  return errorMessage(propName, component);
};

const errorMessage = (propName, component) => {
  return new Error(
    propName + ' in ' + component + ' is not within the valid range'
  );
};
