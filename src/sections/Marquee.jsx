import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// Background Image
const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url("https://images.unsplash.com/photo-1519741497674-611481863552")
    center/cover no-repeat;
  z-index: -2;
`;

// Dark Overlay
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: -1;
`;

const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  text-align: center;
  color: white;
  padding: 2rem 0;
`;

// Heading
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Subheading
const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Tagline
const Tagline = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Cards Grid
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Card
const Card = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem 1rem;
  transition: 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    transform: translateY(-10px) scale(1.03);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const HomeEventSection = () => {
  return (
    <Section>
      <Background />
      <Overlay />

      <Container>
        <Title>Crafting Unforgettable Events</Title>
        <Subtitle>Turning moments into memories</Subtitle>

        <Tagline>
          Every celebration tells a story. <br />
          We bring it to life.
        </Tagline>

        <Cards>
          <Card>
            <CardIcon>💍</CardIcon>
            <CardTitle>Weddings</CardTitle>
          </Card>

          <Card>
            <CardIcon>🏢</CardIcon>
            <CardTitle>Corporate</CardTitle>
          </Card>

          <Card>
            <CardIcon>🎂</CardIcon>
            <CardTitle>Birthdays</CardTitle>
          </Card>

          <Card>
            <CardIcon>📸</CardIcon>
            <CardTitle>Photography</CardTitle>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
};

export default HomeEventSection;