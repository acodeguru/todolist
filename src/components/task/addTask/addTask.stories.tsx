import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import 'antd/dist/antd.css';
import '../../../index.scss'
import '../../../styles/main.scss'
import { reduxContext } from '../../../redux/context';
import  AddNewTask  from './addTask';
export default {
  title: 'Task/Add Task',
  component: AddNewTask,
} as Meta;

const Template: Story<{value:any}> = (args) =><reduxContext.Provider {...args} ><AddNewTask /> </reduxContext.Provider>;

export const NewTask = Template.bind({});
NewTask.args = {
    value:{state:{tasks:[],dispatch:()=>{
            alert('Can not perform Operation in Storybook')
        }
    
    }}

};
