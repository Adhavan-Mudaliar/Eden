import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #00a7a5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return <Container>Super Deal! Free Shipping over ₹400</Container>;
};

export default Announcements;
