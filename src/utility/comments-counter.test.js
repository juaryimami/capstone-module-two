/**
 * @jest-environment jsdom
 */

const { expect, test, describe } = require('@jest/globals');
const countComments = require('./countComments.js');

describe('Test for comment counter function', () => {
  // Arrange
  const dummyCommentContainerNode = document.createElement('ul');
  for (let i = 0; i < 10; i += 1) {
    const dummyCommentNode = document.createElement('li');
    dummyCommentContainerNode.appendChild(dummyCommentNode);
  }

  // Act
  const commentCount = countComments(dummyCommentContainerNode);

  // Assert
  test('Expectation: Value of commentCount should be 10', () => {
    expect(commentCount).toBe(10);
  });
});
