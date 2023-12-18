import styled from "styled-components";
import { MoreInfo } from "../loginPage/LoginPage.jsx";
import { useState } from "react";
import axios from "axios";

const LoginInput = styled.div`
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  padding-top: 0px;
  margin-top: 0px;
`;

const Title = styled.h1`
  // font-size: bold;
  text-align: center;
  color: #ee0000;
  margin-bottom: 15px;
`;

const NameInput = styled.input`
  display: flex;
  margin-top: 0px;
  margin-bottom: 10px;
  padding: 8px 160px 8px 5px;
  border-radius: 10px;
`;

const EmailInput = styled.input`
  display: flex;

  margin-bottom: 10px;
  padding: 8px 160px 8px 5px;
  border-radius: 10px;
`;

const PasswordInput = styled.input`
  display: flex;
  margin-bottom: 10px;
  padding: 8px 160px 8px 5px;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  color: #fff;
  display: flex;
  padding: 9px 132px;
  border-radius: 10px;
  background-color: #ee0000;
  font-weight: bold;
  font-size: 16px;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    axios.get("/test", {
      name: name,
      email: email,
      password: password,
    });
  }
  return (
    <LoginInput>
      <Title>Register</Title>
      <LoginForm onSubmit={registerUser}>
        <NameInput
          type="name"
          placeholder="John Doe"
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></NameInput>
        <EmailInput
          type="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        ></EmailInput>
        <PasswordInput
          type="password "
          placeholder="password"
          required
          value={password}
          onChange={(ev) => setPassWord(ev.target.value)}
        ></PasswordInput>
        <SubmitButton>Register</SubmitButton>
      </LoginForm>
      <MoreInfo>
        Already Registered? <a href="/login">Login</a>
      </MoreInfo>
    </LoginInput>
  );
};

export default Register;
