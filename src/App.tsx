import React, { Suspense } from 'react';
import styled from 'styled-components';

const Logo = React.lazy(() => import('@/components/Logo'));

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size:20px;
`;

function App() {
  return (
    <StyledContainer>
      <Suspense fallback={<div>load..</div>}>
        <Logo />
      </Suspense>
      <StyledTitle>
        <strong>React Boilerplate</strong>
        {' '}
        By Jonghyuk Max Kim
      </StyledTitle>
    </StyledContainer>
  );
}

export default App;
