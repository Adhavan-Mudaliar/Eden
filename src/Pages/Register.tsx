import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("./src/assets/Register.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 24px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 16px 16px 0px 0px;
  padding: 8px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 24px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 8px 8px;
  background-color: #00a7a5;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By registering, you agree to our <b>Terms of Use</b> and{" "}
            <b>Privacy Policy</b>.
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
