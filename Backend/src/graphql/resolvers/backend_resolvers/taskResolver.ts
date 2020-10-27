import { 
  Task, User
} from '../../../models'

import { v4 as uuidv4 } from 'uuid';

export default {

    task: async ({uuid}, context, info) => {
      try {
        return await Task.findOne({
          include: [{
            model: User, 
          }],
          where: {
            uuid: uuid,
          }
        });
      } catch (e) {
        const error = new Error(e) as any;
        error.code = 400;
        throw error;
      }
    },

    tasks: async (parent, args, context, info) => {
      try {
          return await Task.findAll({
            include: [{
              model: User,
            }],
          })
      } catch (e) {
          const error = new Error(e) as any;
          error.code = 400;
          throw error;
      }
  },

  createTask: async ({taskInput}, context, info) => {
    try {
      const existingTask = await Task.findOne({

        where: {
          name: taskInput.name,
        }
      });

      if (existingTask) {
        const error = new Error("Role exists already!");
        throw error;
      }

      const role = new Task({
        name: taskInput.name,
        user_uuid:taskInput.user_uuid,
        task_date:taskInput.task_date,
        task_time:taskInput.task_time,
        uuid: uuidv4()
      });

      const createTask = await role.save();
      return await Task.findOne({
        where: {
          name: taskInput.name,
        }
      });
    } catch (e) {
      const error = new Error(e) as any;
      error.code = 400;
      throw error;
    }
  }
}