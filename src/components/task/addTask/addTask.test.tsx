import AddNewTask from './addTask';
import React from 'react';
import TestRenderer from 'react-test-renderer';

it('Add New Task Test', () => {
  const tree = TestRenderer.create(<AddNewTask/>).toJSON();
  expect(tree).toMatchSnapshot();
});