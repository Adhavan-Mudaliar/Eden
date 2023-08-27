import { styled } from "styled-components";
import NavBar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 24px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 24px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 24px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 8px;
  margin-right: 24px;
  ${mobile({ margin: "8px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort by:</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price (ascending)</Option>
            <Option>Price (descending)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
