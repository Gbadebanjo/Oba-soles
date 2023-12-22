import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

const LoginForm = styled.form``;

const Title = styled.h1`
  font-size: bold;
  text-align: center;
  color: #ee0000;
  margin-bottom: 15px;
`;

const EmailInput = styled.input`
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
  padding: 9px 142px;
  border-radius: 10px;
  background-color: #ee0000;
  font-weight: bold;
  font-size: 16px;
`;

export const MoreInfo = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Login successful");
          navigate("/");
        } else {
          alert("Incorrect email or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <LoginInput>
      <Title>Login</Title>
      <LoginForm onSubmit={handleSubmit}>
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
          onChange={(ev) => setPassword(ev.target.value)}
        ></PasswordInput>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
      <MoreInfo>
        Don't have an account? <a href="/register">Register</a>
      </MoreInfo>
      {/* <Or>Or</Or> */}
      {/* <SubmitButton>Continue with Google</SubmitButton> */}
    </LoginInput>
  );
};

export default LoginPage;
