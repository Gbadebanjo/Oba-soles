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
  color: #ee0000;
  margin-bottom: 15px;
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
  padding: 9px 137px;
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

//   const Or = styled.picture`
//   // font-size: bold;
//   padding: 0px;
//   margin: 0px;
// `;

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
        <MoreInfo>
          Don't have an account? <a href="/register">Register</a>
        </MoreInfo>
        {/* <Or>Or</Or> */}
        {/* <SubmitButton>Continue with Google</SubmitButton> */}
    </LoginInput>
  );
};

export default LoginPage;
