import { styled } from "styled-components";

interface Category {
  id?: number;
  img?: string;
  title?: string;
  tY?: string;
}
interface CategoryProps {
  item: Category;
}

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 72vh;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img<Category>`
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: translateY(${(props) => props.tY}%);
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 24px;
  font-size: 39px;
`;

const Button = styled.button`
  border: 0;
  padding: 16px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItems = ({ item }: CategoryProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} tY={item.tY} />
      </ImageContainer>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
