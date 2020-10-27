import { DataTypes, Model, BuildOptions } from 'sequelize';
import { sequelize } from '../../util/database';

// We need to declare an interface for our model that is basically what our class would be
interface ITask extends Model {
    uuid: any;
    name: any;
    task_date: any;
    task_time: any,
    user_uuid: any;
}

// Need to declare the static model so `findOne` etc. use correct types.
type ITaskStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): ITask;
}

const Task = <ITaskStatic>sequelize.define('task', {
    uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    task_time: DataTypes.STRING,
    task_date: DataTypes.STRING,
    name: DataTypes.STRING,
    user_uuid: {
        type: DataTypes.UUID,
    }
}, {
    freezeTableName: true,
    timestamps: false,
},
);


export default Task;
