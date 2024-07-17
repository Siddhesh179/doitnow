// src/components/OurServices.jsx
import React, { useState } from "react";
import {
  ServicesContainer,
  Title,
  CardsContainer,
  CardWrapper,
  Card,
  CardFront,
  CardBack,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from "./OurServicesStyles";
import services from "./OurServicesData";
import Moreinfo from "./Moreinfo";

const OurServices = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <CardsContainer>
        {services.map((service, index) => (
          <CardWrapper key={index} onClick={() => handleCardClick(index)}>
            <Card isFlipped={flippedIndex === index}>
              <CardFront>
                <CardImage src={service.imageUrl} alt={service.title} />
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </CardFront>
              <Moreinfo />
              <CardBack>
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.backContent}</CardDescription>
                </CardContent>
              </CardBack>
            </Card>
          </CardWrapper>
        ))}
      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurServices;
