import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Hero.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Sirin Stencil";
  font-weight: 500;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  margin: 0 auto;

  margin-top: 1.5rem; /* 👈 push down */

  text-transform: capitalize;

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    margin-top: 1rem; /* adjust for mobile */
  }
}
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 4, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div style={{ position: "relative", display: "inline-block" }}>
  {/* CHIRAYU */}
  <div style={{ display: "flex" }}>
    {"CHIRAYU".split("").map((letter, index) => (
      <motion.h1
        key={index}
        variants={item}
        data-scroll
        data-scroll-delay={`${0.1 - index * 0.015}`}
        data-scroll-speed="5"
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: "600",
          color: "#e39a1a",
          margin: "0 2px",
        }}
      >
        {letter}
      </motion.h1>
    ))}
  </div>

  {/* by Sari */}
  <div
  style={{
    position: "absolute",
    right: "-10%",
    bottom: "-10px",
    display: "flex",
  }}
>
  {"by Sari".split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={item}
      data-scroll-speed="3"
      style={{
        fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
        letterSpacing: "3px",
        color: "#d4af37",
        marginRight: letter === " " ? "6px" : "0px",
      }}
    >
      {letter}
    </motion.span>
  ))}
</div>
</div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Event Managment and Photography
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
