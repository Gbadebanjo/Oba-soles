import styled from "styled-components";
import { MoreInfo } from "../loginPage/LoginPage.jsx";

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
margin-top: 0px;`;

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
  padding: 8px 150px 8px 5px;
  border-radius: 10px;
`;

const EmailInput = styled.input`
  display: flex;

  margin-bottom: 10px;
  padding: 8px 150px 8px 5px;
  border-radius: 10px;
`;

const PasswordInput = styled.input`
  display: flex;
  margin-bottom: 10px;
  padding: 8px 150px 8px 5px;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  color: #fff;
  display: flex;
  padding: 9px 127px;
  border-radius: 10px;
  background-color: #ee0000;
  font-weight: bold;
  font-size: 16px;
`;

const Register = () => {
  return (
    <LoginInput>
      <Title>Register</Title>
      <LoginForm>
        <NameInput type="name" placeholder="firstname" required></NameInput>
        <EmailInput
          type="email"
          placeholder="your@email.com"
          required
        ></EmailInput>
        <PasswordInput
          type="password "
          placeholder="password"
          required
        ></PasswordInput>
        <SubmitButton>Register</SubmitButton>
      </LoginForm>
      <MoreInfo>Already Registered? <a href="/login">Login</a></MoreInfo>
    </LoginInput>
  );
};

export default Register;
