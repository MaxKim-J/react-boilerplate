import React from 'react';
import styled from 'styled-components';
import Logo from '@/components/Logo';

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
`;

const StyledTitle = styled.div`
  font-size: 20px;
`;

function App() {
  return (
    <StyledContainer>
      <Logo />
      <StyledTitle>
        <strong>React Boilerplate</strong>
        {' '}
        By Jonghyuk Max Kim
      </StyledTitle>
      <br />
      <StyledTitle>
        <a href="https://github.com/MaxKim-J/react-boilerplate" target="_blank" rel="noreferrer">Respository</a>
      </StyledTitle>
    </StyledContainer>
  );
}

export default App;
