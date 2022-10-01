import React, { useState } from 'react';
import { FaAlignLeft, FaAlignRight } from 'react-icons/fa'
import './Nab.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { open, close } from '../../app/featurs/mode'
function Nab() {
    const mode = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [collapse, isCollapse] = useState(false);
    return (
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <FaAlignLeft className={mode ? 'opener' : 'closer'} onClick={() => dispatch(open())} />
                    <FaAlignRight className={mode ? 'closer' : 'opener'} onClick={() => dispatch(close())} />
                    <NavbarBrand>ToDo-Tracker</NavbarBrand>
                    <NavbarToggler onClick={() => isCollapse(!collapse)} />
                    <Collapse isOpen={collapse} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/about'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/features'>Features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/join'>Join Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Nab;