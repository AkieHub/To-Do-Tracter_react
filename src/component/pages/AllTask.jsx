import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tea from './Tea';



function AllTask() {
    document.title = "To Do Traker";
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
    const [tasks, setTasks] = useState([]);
    const getTask = () => {
        axios.get("http://localhost:8084/niit/user/task/all-task/sachi111@gmail.com")
            .then((r) => { setTasks(r.data) },
                (e) => { console.log(e) });
    }
    useEffect(() => {
        getTask();
    });

    return (
        <div>
            <table className='t-table'>
                <thead>
                    <tr>
                        <th>View</th>
                        <th>Task Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            tasks.map((i) => {
                                return (<Tea data={i} />)
                            })
                        }
                </tbody>
            </table>
        </div>
    );
}

export default AllTask;