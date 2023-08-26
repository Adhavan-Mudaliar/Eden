import { styled } from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Announcements from "../components/Announcements";
import { Add, Remove } from "@mui/icons-material";

interface Props {
  type?: string;
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  text-align: center;
`;

const Top = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

const TopButton = styled.button<Props>`
  padding: 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 8px;
  font-size: 14px;
  font-weight: 400;
`;

const Bottom = styled.h1`
  display: flex;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  height: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const ProductId = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const ProductColor = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 4px;
`;

const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
`;

const SummaryItem = styled.div<Props>`
  margin: 32px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "500" : "300")};
  font-size: ${(props) => (props.type === "total" ? "24px" : "20px")};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: black;
  color: white;
`;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcements />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="./src/assets/product1.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Velvet Jacket
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 8989383929
                  </ProductId>
                  <ProductColor color="lightpink" />
                  <ProductSize>
                    <b>Size:</b> 32
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>₹ 900</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> White Over-sized Tee
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 8989383929
                  </ProductId>
                  <ProductColor color="lightgray" />
                  <ProductSize>
                    <b>Size:</b> 30
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>₹ 700</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ 1600</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>₹ -200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 1600</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Hr />
      <Footer />
    </Container>
  );
};

export default Cart;
