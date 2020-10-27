import { mergeTypes } from 'merge-graphql-schemas';
import roleType from './backend_types/roleType';
import userType from './backend_types/userType';
import taskType from './backend_types/taskType';

const types = [
  roleType,
  userType,
  taskType
];

export default mergeTypes(types, { all: true });
