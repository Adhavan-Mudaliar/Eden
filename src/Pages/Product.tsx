import { styled } from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 48px;
  display: flex;
  ${mobile({ padding: "8px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 88vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 48px;
  ${mobile({ padding: "8px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 32px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 4px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 8px;
  padding: 4px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #00a7a5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 4px;
`;

const Button = styled.button`
  padding: 16px;
  border: 2px solid #00a7a5;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #00a7a5;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="./src/assets/Product1.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi et,
            aperiam eaque eligendi neque veniam quisquam modi nihil ipsa sit eos
            debitis quos ab, earum molestiae necessitatibus dolores quod.
            Cupiditate.
          </Description>
          <Price>₹ 1199</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="blue" />
              <FilterColor color="dark blue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
