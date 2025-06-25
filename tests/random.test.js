const { expect } = require('chai');

describe('Simple Test Suite', function () {
  it('random test', function () {
    // random number test
    const randomNumber = Math.floor(Math.random() * 100);
    expect(randomNumber).to.be.within(0, 50);
  });

  it('should fail this test', function () {
    expect(true).to.be.true;
  });
});
