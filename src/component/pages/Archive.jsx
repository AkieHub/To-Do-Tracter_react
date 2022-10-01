import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Task from './Task';
function Archive() {
    document.title = "ToDo Tracker || archive-task";
    // const vv = [
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' },
    //     { taskHeading: 'inter', taskDescription: 'tis is try on', taskEndDate: '2022/10/10', priority: 'low' }
    // ]
    const [tasks,setTasks]=useState([]);
    const getTask=()=>{
        axios.get("http://localhost:8085/niit/archive/task/get-deleted/sachi111@gmail.com")
        .then((r)=>{setTasks(r.data)},
        (e)=>{console.log(e)});
    }
    useEffect(() => {
        getTask();
      });
    return (
        <div>
            <Task task={tasks} />
        </div>
    );
}

export default Archive;