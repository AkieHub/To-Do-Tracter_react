
import React, { useState } from 'react';
import { BsViewList } from 'react-icons/bs';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
function Task(props) {
    const data = props.task;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
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
                    data.map((i, k) => {
                        return (
                            <tr key={k+1}>
                                <td style={{ cursor: 'pointer' }}><BsViewList /></td>
                                <td>{i.taskHeading}</td>
                                <td>{i.taskDescription}</td>
                                <td>{i.taskEndDate}</td>
                                <td>{i.priority}</td>
                                <td>
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle} id={k} key={k}>
                                        <DropdownToggle variant="success">
                                            Action
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem href="#/action-1">Action</DropdownItem>
                                            <DropdownItem href="#/action-2">Another action</DropdownItem>
                                            <DropdownItem href="#/action-3">Something else</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                        )

                    })
                }

            </tbody>
        </table>
    );
}

export default Task;
