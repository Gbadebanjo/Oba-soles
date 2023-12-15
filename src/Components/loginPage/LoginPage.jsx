import styled from "styled-components";

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
`;

const EmailInput = styled.input`
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
  padding: 9px 143px;
  border-radius: 10px;
  background-color: #ee0000;
  font-weight: bold;
`;

const LoginPage = () => {
  return (
    <LoginInput>
      <Title>Login</Title>
      <LoginForm>
        <EmailInput type="" placeholder="your@email.com" required></EmailInput>
        <PasswordInput
          type="password "
          placeholder="password"
          required
        ></PasswordInput>
        <SubmitButton>Login</SubmitButton>
      </LoginForm>
    </LoginInput>
  );
};

export default LoginPage;
