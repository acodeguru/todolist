import CompletedTasks from './completedTask';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CompletedTasks />).toJSON();
  expect(tree).toMatchSnapshot();
});