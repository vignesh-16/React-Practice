import { useRef } from 'react';
import { useState } from 'react';
import useFetch from './useFetch';
import usePost from './usePost';

const Todo = () => {
    const taskInput = useRef(null)
    const [taskExists, setTaskExits] = useState(false);
    const { data : tasks, setData : setTasks, isLoading, serverError } = useFetch('http://localhost:3001/tasks');
    const createStory = usePost('http://localhost:3001/tasks');
 
    const addTask = (e)=> {
        e.preventDefault();
        setTaskExits(false);
        console.log('These are the default tasks: ',tasks)
        console.log(`Here's the value: `,taskInput.current.value);
        if(!taskInput.current.value) {
            return;
        } 
        let newTaskValue = taskInput.current.value;
        tasks.forEach((task)=>{
            if(task.value === newTaskValue) {
                setTaskExits(true);
            } 
        })
        if(! taskExists) {
            const newTask = { id: tasks.length + 1, value: newTaskValue, isCompleted: false };
            createStory(newTask);
            setTasks([...tasks, newTask]);
            taskInput.current.value = '';
        }
        console.log('These are the updated tasks: ',tasks)
    }
    const markCompleted = ()=>{
        const updatedTasks = tasks.map((task)=>{
            if(task.isSelected) {
                task.isCompleted = true;
                task.isSelected = false;
            }
            return task;
        })
        setTasks(updatedTasks);
    }
    const deleteSelected = ()=> {
        const updatedTasks = []
        tasks.forEach((task)=>{
            if(! task.isSelected) {
                updatedTasks.push(task)
            }
        })
        setTasks(updatedTasks);
    }
    const taskSelected = (taskId)=> {
        const updatedTasks = tasks.map((task)=>{
            if(task.id === taskId) {
                task.isSelected = !task.isSelected;
            }
            return task;
        })
        setTasks(updatedTasks);
    }
    return ( 
        <>
            <section className="Todo-app">
                <h2>Your Tasks</h2>
                <div className="add-task">
                    <input type="text" placeholder="Enter a task" ref={taskInput}></input>
                    <button onClick={(e)=>addTask(e)} >Add</button>
                    <button onClick={()=>markCompleted()}>Done</button>
                    <button onClick={()=>deleteSelected()}>Delete</button>
                </div>
                <div className='tasks-container'>
                    { isLoading && <div>Please wait..</div> }
                    { serverError && <div>Error Retriving data</div> }
                    {
                        tasks && 
                        tasks.map((task)=> (
                            <div className="task" key={task.id}>
                                <input type="checkbox" onClick={()=>taskSelected(task.id)} checked={task.isSelected}></input>
                                <span className={task.isCompleted ? 'completed': ''}>{task.value}</span>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
     );
}
 
export default Todo;