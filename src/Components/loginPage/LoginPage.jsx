import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import React from "react";
import { jwtDecode } from "jwt-decode";

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

const PasswordContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const ShowButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #ee0000;
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
  const { setName } = React.useContext(UserContext); // consume the context
  const [showPassword, setShowPassword] = useState(false); // for toggling password visibility

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          alert("Login successful");
          navigate("/");
          const { token } = res.data;
          const decodedToken = jwtDecode(token);
          console.log(decodedToken);
          const name = decodedToken.name;
          setName(name);
          localStorage.setItem("name", name);
        } else {
          alert("Incorrect email or password");
        }
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(err.response.data.message);
        } else if (err.request) {
          // The request was made but no response was received
          alert("No response from server. Please try again later.");
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("Error in setting up the request");
        }
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
        <PasswordContainer>
          <PasswordInput
            type={showPassword ? "text" : "password"}
            placeholder="password"
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          ></PasswordInput>
          <ShowButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </ShowButton>
        </PasswordContainer>
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
