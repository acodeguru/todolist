/*This is a Reducer method which we use to pass  useReducer Hook */

const reducer = (state :any,  action:any) => {
    const { type , payload } = action;
    if(type==='AddNewTask'){

        console.log("----------------")
        return {...state,tasks:[...state.tasks, {...payload}]} // In which we are using  speard operator to add new task. It returns an object to redux State.
    
    }

    else if (type==="MarkCompleted"){
        /*In this method we are marking task as done. */
        let tasks= state.tasks.map((task:any)=>{
            if(task.task===payload.task)
            return {...task,completed:!task.completed}
            else{
                return task
            }
        })
        

        return {...state,tasks}


    }

    else if (type==='Delete'){
        /*This method delete task. */
        let tasks=state.tasks.filter(
            (task:any)=>payload.task!==task.task)

            console.log(payload,"Payload")
        return {...state,tasks}

    }
    else 
        return state
  };
  
  export default reducer;