import { mergeResolvers } from 'merge-graphql-schemas';
import roleResolver from './backend_resolvers/roleResolver';
import userResolver from './backend_resolvers/userResolver';
import taskResolver from './backend_resolvers/taskResolver';

const resolvers: any[] = [
  roleResolver,
  taskResolver,
  userResolver
];

export default mergeResolvers(resolvers);