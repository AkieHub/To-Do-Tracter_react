import React,{useState,useEffect} from 'react';
import Task from './Task';
import axios from 'axios';
function Pending() {
    document.title="ToDo Tracker || pending-task";
    // const vv=[
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'},
    //     {taskHeading:'inter',taskDescription:'tis is try on',taskEndDate:'2022/10/10',priority:'low'}
    // ]
    const [tasks,setTasks]=useState([]);
    const getTask=()=>{
        axios.get("http://localhost:8084/niit/user/task/overdue/sachi111@gmail.com")
        .then((r)=>{setTasks(r.data)},
        (e)=>{console.log(e)});
    }
    useEffect(() => {
        getTask();
      });
    return (
        <div>
          <Task task={tasks}></Task>
        </div>
    );
}

export default Pending;