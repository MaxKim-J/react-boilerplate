import React from 'react';
import styled, { keyframes } from 'styled-components';
import logoImage from '@/assets/images/react.png';

const turn = keyframes`
  0% {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled.img`
  width: 500px;
  height: auto;
  animation: ${turn} 10s 5s infinite linear;
`;

function Logo() {
  return (
    <StyledLogo src={logoImage} alt="logo" />
  );
}

export default Logo;
