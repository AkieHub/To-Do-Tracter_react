import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTask from '../pages/AllTask';
import Pending from '../pages/Pending';
import Completed from '../pages/Completed';
import Archive from '../pages/Archive';
import SideBar from '../common/SideBar';
import { useEffect } from 'react';
function Dashboard({mode}) {
    const [open,setOpen]=useState(false)
    console.log(mode);
    useEffect(()=>{
        setOpen(mode)
    },[mode]);
    return (
        <>
            <Router>
                <SideBar mode={open}>
                    <Routes>
                        <Route path="/allTask" element={<AllTask />} />
                        <Route path="/complete" element={<Completed />} />
                        <Route path="/pending" element={<Pending />} />
                        <Route path="/archive" element={<Archive />} />
                        <Route path="*" element={<> not found</>} />
                    </Routes>
                </SideBar>
            </Router>
        </>
    );
}

export default Dashboard;