import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { styled } from "styled-components";
import { sliderItems } from "../data";

interface Props {
  direction?: "left" | "right";
  bg?: string;
  sc?: string;
  tX?: string;
  tY?: string;
  slideIndex?: number;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<Props>`
  width: 48px;
  height: 48px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;

const Wrapper = styled.div<Props>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => (props.slideIndex ?? 0) * -100}vw);
  transition: all 0.3s ease;
`;

const Slide = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
`;

const Image = styled.img<Props>`
  width: 100%;
  height: auto;
  transform: scale(${(props) => props.sc}) translateX(${(props) => props.tX}%)
    translateY(${(props) => props.tY}%);
`;

const InfoContainer = styled.div`
  flex: 1;
  align-items: center;
  transform: translateX(24px);
`;

const Title = styled.h1`
  font-size: 79px;
  font-weight: 500;
`;

const Description = styled.p`
  margin: 48px 0px;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.28px;
  width: 65%;
`;

const Button = styled.button`
  padding: 16px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <ImageContainer>
              <Image
                src={items.img}
                sc={items.sc}
                tX={items.tX}
                tY={items.tY}
              />
            </ImageContainer>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Description>{items.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
