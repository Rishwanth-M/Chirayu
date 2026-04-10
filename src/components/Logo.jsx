import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Svgs/Chirayu-Original.png'; // 👈 your PNG

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: fit-content;

  a {
    display: flex;
    align-items: center;
  }
`;

const LogoImage = styled(motion.img)`
  width: 4.5rem;
  height: auto;
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <LogoImage
          src={logo}
          alt="Chirayu Events"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}
        />
      </Link>
    </Container>
  );
};

export default Logo;