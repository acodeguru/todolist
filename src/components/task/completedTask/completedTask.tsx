import React from 'react'
import {Button, Switch, Table} from 'antd'
import {useRedux} from '../../../redux/context'

export default function CompletedTask() {

  const {state,dispatch} = useRedux()
  let tasks:any = state.tasks.filter((task:any)=>task.completed) 

  let markCompleted = (data:any)=>{

      dispatch({type:"MarkCompleted",payload:data})
      
  }

  let deleteData = (data:any)=>{

      dispatch({type:"Delete",payload:data})

  }


    const columns = [
        {
          title: 'Task',
          dataIndex: 'task',
        },
        {
          title: 'Time',
          dataIndex: '',
          render:(data:any)=>data.dateTime.calendar(),

        },
        {
          title: 'Completed',
          dataIndex: '',
          render:(data:any)=>{
          return <Switch onChange={()=>{
                markCompleted({...data})
          }} checked={data.completed}/>}
        },
        {
            title:'Operations',
            render:(data:any)=>{
                    return <Button onClick={()=>deleteData(data)} size='large' className='bg-red-700 text-white'> Delete</Button>
            }
        }
      ];
      
    return (
        <div>
            <Table columns={columns} pagination={{pageSize:8}} dataSource={tasks} rowKey={'dateTime'}></Table>
        </div>
    )
}
