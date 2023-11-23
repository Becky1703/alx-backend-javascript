const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should round down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should round down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should round up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should round up a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should round up a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.5, 2.6), 6);
  });

  it('should round down a and b\'s floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(3.499999, 4.499999), 7);
  });
});
