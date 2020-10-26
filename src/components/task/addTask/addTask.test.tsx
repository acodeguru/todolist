import AddNewTaskForm from './addTask';
import React from 'react';
import TestRenderer from 'react-test-renderer';

it('Add New Task Test', () => {
  const tree = TestRenderer.create(<AddNewTaskForm/>).toJSON();
  expect(tree).toMatchSnapshot();

  const t = () => {
    throw new TypeError();
  };
  expect(t).toThrow(TypeError);
});