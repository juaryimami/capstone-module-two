/**
 * @jest-environment jsdom
 */

const { expect, test, describe } = require('@jest/globals');
const htmlTemplate = require('./templatePagel.js');
const itemCounter = require('./ItemConter.js');

describe('Test ItemCounter', () => {
  // Arrange
  document.body.innerHTML = htmlTemplate;

  // Act
  const items = itemCounter();

  // Assert
  test('itemCounter should return 9', () => {
    expect(items).toBe(9);
  });
});
