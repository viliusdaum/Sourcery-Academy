export const particleIdentifierGenerator = (amount) => {
  let identifiers = [];

  for (let i = 0; i < amount; i++) {
    identifiers.push(Math.floor(Math.random() * 100));
  }

  return identifiers;
};
