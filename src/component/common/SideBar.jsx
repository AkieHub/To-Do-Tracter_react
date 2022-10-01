import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './SideBar.css'

import { FaArchive, FaList, FaProcedures, FaExpand } from 'react-icons/fa'

function SideBar() {

  const mode = useSelector((state) => state.counter.value)
  const phat = (icon) => {
    console.log(icon)
  }

  const sideData = [
    { path: "/sideBar/", name: "AllTask", icon: <FaList /> },
    { path: "/sideBar/pending", name: "Pending", icon: <FaArchive /> },
    { path: "/sideBar/complete", name: "Completed", icon: <FaProcedures /> },
    { path: "/sideBar/archive", name: "Archive", icon: <FaExpand /> },
  ];


  return (
    <>
      <div className={mode ? 'main-container2' : 'main-container'}>
        <div className={mode ? 'sidebar' : 'sidebarclose'}>
          <div className='logo'>
            <span>ToDO Tracker</span>
          </div>
          <hr />
          <section style={{ width: "200px" }} className='top_section'>
            {
              sideData.map((item, i) => {

                return (<NavLink onClick={() => { phat(item.name) }} to={item.path} className="link" key={i}
                  activeclassname="active">
                  <div className="icon">{item.icon}</div>
                  <div className="link_text">{item.name}</div>
                </NavLink>)
              }
              )
            }
          </section>
        </div>
        <main className={!mode ? 'main-content' : 'main-content2'}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default SideBar;