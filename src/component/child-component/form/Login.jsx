import React, { useState } from 'react';
import './Login.css'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




function Login(props) {
  const userData = { emailId: "", userPassword: "" };
  const [formValue, setFormValue] = useState(userData);
  const [error, setError] = useState({});
  const [isSubmite, setIsSubmite] = useState(false);
  const nav = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setError(errorHandler(formValue));
    console.log(error);
    setIsSubmite(true);
  }
  const login = (data) => {
    axios.post('http://localhost:8083/niit/user/auth/login', data)
      .then((r) => {
        nav('/sideBar', { state: r.data });
        console.log(r);
      })
      .catch((e) => { console.warn(e); })
  }
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmite) {
      login(formValue);
    }
  }, [error, isSubmite, login]);

  const valueHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const errorHandler = (object) => {
    let errortemp = {};
    const emailRex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (object.emailId === "") {
      errortemp.emailId = "Email value require";
    } else if (!emailRex.test(object.emailId)) {
      errortemp.emailId = "Email Vailid Email Id";
    }
    if (object.userPassword === "") {
      errortemp.userPassword = "Password value require";
    }
    return errortemp;
  }

  return (
    <div className='App'>
      <h2>Sign ToDo-Tracker</h2>
      <hr />
      <Form className='form' onSubmit={(e) => submitForm(e)}>
        <FormGroup>
          <Label for='emailId'>Username</Label>
          <Input
            type="text"
            name="emailId"
            id="emailId"
            placeholder="akie@todo.com"
            value={formValue.emailId}
            onChange={valueHandler}
          />{
            error.emailId === 'Email Vailid Email Id' ?
              <FormText>Your username is most likely your email.</FormText> : ''
          }
          {
            error.emailId === 'Email value require' ?
              <FormText>{error.emailId}</FormText> : ''
          }
          {/* <FormFeedback valid>
                That's a tasty looking email you've got there.
              </FormFeedback>
              <FormText>Your username is most likely your email.</FormText> */}
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="********"
            value={formValue.userPassword}
            onChange={valueHandler}
          />
          {error.userPassword === 'Password value require' ?
            <FormText>{error.userPassword}</FormText> : ''
          }
        </FormGroup>
        <div style={{ textAlign: 'center' }}>
          <Button color='danger'>Submit</Button><br />
          <Link color='danger' className='text-info' to="/register" key="register">Don't have account</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
