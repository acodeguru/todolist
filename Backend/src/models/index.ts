import Role from "./backend_models/role";
import User from "./backend_models/user";
import Task from "./backend_models/task";

Role.hasMany(User, { foreignKey: 'role_uuid', sourceKey: 'uuid' });

User.belongsTo(Role, { foreignKey: 'role_uuid', targetKey: 'uuid' });
User.hasMany(Task, { foreignKey: 'user_uuid', sourceKey: 'uuid' });

Task.belongsTo(User, { foreignKey: 'role_uuid', targetKey: 'uuid' });

export {
  Role,
  User,
  Task
};
