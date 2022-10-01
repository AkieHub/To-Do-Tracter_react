import React, { useState } from 'react';
import { BsViewList, } from 'react-icons/bs';
import {AiFillDelete,AiFillEdit,AiOutlineFileDone} from 'react-icons/ai'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

function Tea(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const i = props.data
    return (
        <tr>
            <td style={{ cursor: 'pointer' }}><BsViewList /></td>
            <td>{i.taskHeading}</td>
            <td>{i.taskDescription}</td>
            <td>{i.taskEndDate}</td>
            <td>{i.priority}</td>
            <td>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle>
                        Action
                    </DropdownToggle>
                    <DropdownMenu style={{ padding:'10px' ,cursor: 'pointer'}}>
                        <DropdownItem style={{ background:'rgba(247, 5, 5, 0.518)' }} color='dengar' href="#/action-1"><AiFillDelete/> Delete</DropdownItem>
                        <DropdownItem  style={{ background:'rgba(247, 207, 5, 0.518)' }} href="#/action-2"><AiFillEdit/>Update</DropdownItem>
                        <DropdownItem  style={{ background:'rgba(20, 241, 20, 0.55)' }} href="#/action-3"><AiOutlineFileDone/>Mark Completed</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </td>
            </tr>
    );
}

export default Tea;