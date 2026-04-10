import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/Svgs/Chirayu-Original.png";

const Container = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translateY(-30px); /* 👈 slight premium positioning */
  background: black;
`;

const GoldText = styled.span`
  font-size: 1.2rem;
  color: #d4af37;
  margin-top: 1.5rem;
  letter-spacing: 2px;
  overflow: hidden;
  white-space: nowrap;
`;

const Loader = ({ onFinish }) => {
  const [startText, setStartText] = useState(false);
  const [textDone, setTextDone] = useState(false);

  // Start text after logo animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartText(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  // Exit after text completes
  useEffect(() => {
    if (textDone) {
      const exitTimer = setTimeout(() => {
        onFinish();
      }, 2000); // shorter + smoother delay

      return () => clearTimeout(exitTimer);
    }
  }, [textDone, onFinish]);

  return (
    <Container
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Logo */}
      <motion.img
        src={logo}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          width: "200px",
          marginTop: "-20px",
        }}
      />

      {/* Text (always rendered → no layout shift) */}
      <GoldText>
        <motion.span
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          animate={
            startText
              ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
              : {}
          }
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => startText && setTextDone(true)}
          style={{
            display: "inline-block",
            borderRight: "2px solid #d4af37",
            paddingRight: "5px",
          }}
        >
          Creating Moments That Last Forever
        </motion.span>
      </GoldText>
    </Container>
  );
};

export default Loader;