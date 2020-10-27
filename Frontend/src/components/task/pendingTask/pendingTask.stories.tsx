import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import 'antd/dist/antd.css';
import '../../../index.scss'
import '../../../styles/main.scss'

import  PendingTask  from './pendingTask';
import { reduxContext } from '../../../redux/context';
import moment from 'moment'
export default {
  title: 'Task/Pending Task',
  component: PendingTask,
} as Meta;

let tasks=[
  {task:"Learn React",
    dateTime:moment(),
    completed:false
},
{task:"Learn Node",
dateTime:moment(),
completed:false
}
,
]


const Template: Story<{value:any}> = (args) =><reduxContext.Provider {...args}>  <PendingTask /> </reduxContext.Provider>;

export const NotEmpty = Template.bind({});
NotEmpty.args = {
  value:{state:{tasks},dispatch:()=>{

    alert('Can not perform Operation in Storybook')
  }}

};

export const Empty = Template.bind({});
Empty.args = {
  value:{state:{tasks:[]},dispatch:()=>{

    alert('Can not perform Operation in Storybook')
  }}

};
