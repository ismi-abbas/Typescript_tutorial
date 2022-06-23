const lib = require('../lib.js');

test('absolute value of -1 is 1', () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});
