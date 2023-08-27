import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 24px;
`;
const Logo = styled.img``;
const Description = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
`;

const Center = styled.div`
  flex: 1;
  padding: 24px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 24px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 12px;
`;

const Right = styled.div`
  flex: 1;
  padding: 24px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 40%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="./src/assets/logo2.svg" />
        <Description>
          Discover a world of elegance at our store, where every garment is
          precisely curated to radiate the essence of Eden. Step in a realm of
          aesthetic and exquisite clothing that reflects your unique style.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "8px" }} />
          1234 Elm Street, Springfield, United States
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "8px" }} />
          +555 123-4567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "8px" }} />
          contact@eden.in
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
