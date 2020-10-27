import PendingTask from './pendingTask';
import React from 'react';
import renderer from 'react-test-renderer';

it('render pending tasks', () => {
  const tree = renderer.create(<PendingTask />).toJSON();
  expect(tree).toMatchSnapshot();
});