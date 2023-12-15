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

const NameInput = styled.input`
  display: flex;

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
  padding: 9px 136px;
  border-radius: 10px;
  background-color: #ee0000;
  font-weight: bold;
`;

const SignUp = () => {
  return (
    <LoginInput>
      <Title>Sign Up</Title>
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
        <SubmitButton>SignUp</SubmitButton>
      </LoginForm>
    </LoginInput>
  );
};

export default SignUp;
