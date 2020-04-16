import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Result from "../components/Result";

function Login() {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({});

  const [check, setCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setCheck(false);
    } else {
      setValidated(true);
      const userObject = {
        address: form[0].value,
        pword: form[1].value,
      };
      setCheck(true);
      setUserData(userObject);
      console.log(userData);
    }
  };

  return (
    <div className="Form">
      <Container>
        <Result check={check} user={userData} />
      </Container>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
