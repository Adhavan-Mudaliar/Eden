import { styled } from "styled-components";
import { mobile } from "../Responsive";

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
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 8px 0px;
  padding: 8px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 8px 8px;
  background-color: #00a7a5;
  color: white;
  cursor: pointer;
  margin-bottom: 8px;
`;
const Link = styled.a`
  margin: 8px 0px 0px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Form>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Button>Sign In</Button>
          <Link>Forgot Password ?</Link>
          <Link>Don't have an account ?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
