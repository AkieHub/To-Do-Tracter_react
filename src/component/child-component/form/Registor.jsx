import React, { useEffect, useState } from 'react';
import './Register.css';
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Registor() {
  const userData = { emailId: "", userPassword: "", firstName: "", dateOfBirth: "", lastName: "", gender: "" };
  const [formValue, setFormValue] = useState(userData);
  const [error, setError] = useState({});
  const [isSubmite, setIsSubmite] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setError(errorHandler(formValue));
    console.log(error);
    setIsSubmite(true);
    console.log(formValue);
  }
  const nav = useNavigate();
  const register = (data) => {
    axios.post('http://localhost:8084/niit/user/register', data).then((r) => {
      nav('/');
      console.log(r);
    }).catch((e) => { console.warn(e) });
  }
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmite) {
      console.log("success");
      register(formValue);
    }
  }, [error, isSubmite, register])
  const valueHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }

  const errorHandler = (object) => {
    let errortemp = {};
    // ----------------->first name <-----------------

    const emailRex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (object.emailId === "") {
      errortemp.emailId = "Email value require";
    } else if (!emailRex.test(object.emailId)) {
      errortemp.emailId = "Email Vailid Email Id";
    }

    // ----------------->Password <-----------------

    if (object.userPassword === "") {
      errortemp.userPassword = "Password value require";
    }

    // ----------------->Gender <-----------------
    if (object.gender === "") {
      errortemp.gender = "Gender value require";
    }

    // -----------------> DOB <-----------------

    const dobDate = new Date(object.dateOfBirth);
    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();
    const dobYear = dobDate.getFullYear();
    if (object.dateOfBirth === "") {
      errortemp.dateOfBirth = "DOB value require";
    } else if (Number(currentYear) - Number(dobYear) < 10) {
      errortemp.dateOfBirth = "DOB is >10";
    }

    // ----------------->first name <-----------------

    if (object.firstName === "") {
      errortemp.firstName = "Name value require";
    }
    return errortemp;
  }
  return (
    <div className='reg'>
      <h2>Sign ToDo-Tracker</h2>
      <Form id='a' className='reg-form row' onSubmit={(e) => submitForm(e)}>
        <FormGroup className='col-lg-6 col-md-6'>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formValue.firstName}
            onChange={valueHandler}
          />
          {error.firstName === 'Name value require' ?
            <FormText>{error.firstName}</FormText> : ''
          }

        </FormGroup>
        <FormGroup className='col-lg-6 col-md-6'>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formValue.lastName}
            onChange={valueHandler}
          />
        </FormGroup>
        <FormGroup className='col-lg-6 col-md-6'>
          <Label>Gender</Label>
          <Input type='select'
            name="gender"
            id="gender"
            onChange={valueHandler}
            value={formValue.gender}
          >
            <option>Open to select</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </Input>
          {error.gender === 'Gender value require' ?
            <FormText>{error.gender}</FormText> : ''
          }
        </FormGroup>
        <FormGroup className='col-lg-6 col-md-6'>
          <Label>Date Of Birth</Label>
          <Input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formValue.dateOfBirth}
            onChange={valueHandler}
          />
          {error.dateOfBirth === 'DOB value require' ?
            <FormText>{error.dateOfBirth}</FormText> : ''
          }
          {error.dateOfBirth === 'DOB is >10' ?
            <FormText>{error.dateOfBirth}</FormText> : ''
          }
        </FormGroup>
        <FormGroup className='col-lg-6 col-md-6'>
          <Label for="examplePassword">Email Id</Label>
          <Input
            type="email"
            name="emailId"
            id="exampleEmail"
            placeholder="akie@todo.com"
            value={formValue.emailId}
            onChange={valueHandler}
          />
          {
            error.emailId === 'Email Vailid Email Id' ?
              <FormText>{error.emailId}.</FormText> : ''
          }
          {
            error.emailId === 'Email value require' ?
              <FormText>{error.emailId}</FormText> : ''
          }
        </FormGroup>
        <FormGroup className='col-lg-6 col-md-6'>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="userPassword"
            id="examplePassword"
            placeholder="********"
            value={formValue.userPassword}
            onChange={valueHandler}
          />
          {error.userPassword === 'Password value require' ?
            <FormText>{error.userPassword}</FormText> : ''
          }
        </FormGroup> <br />
        <div>
          <Button color='success' className='mr-2 border-success'>Submit</Button>
          <Button color='danger' className='ml-2 border-danger' type="reset" onClick={() => { document.getElementById('a').reset() }}>Reset</Button>
        </div>
      </Form>
    </div>
  );
}

export default Registor;