import styled from "styled-components";

export const ServicesContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardWrapper = styled.div`
  perspective: 1000px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 20px;
  color: #333;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;
