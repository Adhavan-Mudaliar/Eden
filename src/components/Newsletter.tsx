import { Send } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
  height: 64vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 79px;
  margin-bottom: 16px;
`;
const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 40px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 38px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  font-size: 14px;
  flex: 8;
  padding-left: 16px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #00a7a5;
  color: white;
  padding-top: 4px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Subscribe to receive the latest updates, exclusive offers, and exciting
        news straight to your inbox!
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
