
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Intro.css'


function Intro( props ) {


    return (
        <div id='home' className='intro d-flex row'>
            <div className="d-flex i-left col-lg-6 col-md-6 col-sm-12">
                <div className='i-name'>
                    <span>Hello..</span>
                    <span className='text-warning'>Akhilesh</span>
                    <span>We are one of the leading company in now digital world</span>
                </div>
                <button onClick={props} className='btn btn-outline-warning i-btn'>Hire me</button>
                <div className='i-img'>
                    <a href='https://github.com/AkieHub?tab=repositories'><img src={"https://icon-library.com/images/github-icon-svg/github-icon-svg-0.jpg"} alt='git' /></a>
                    <a href='ww.wwwww'><img src={"https://image.similarpng.com/very-thumbnail/2020/05/Icon-Instagram-In-circle-PNG.png"} alt='intaghram' /></a>
                    <a href='https://www.linkedin.com/in/akhilesh-vishwakarma-1598371a0'><img src={"https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"} alt='linkedin' /></a>
                </div>
            </div>
            <div className="i-right d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 right">
            <Outlet/>
            </div>
        </div>
    );
}

export default Intro;