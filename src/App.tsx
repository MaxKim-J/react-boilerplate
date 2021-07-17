import React, { Suspense } from 'react';
// import Comp from '@/components/Component';

const Component = React.lazy(() => import('@/components/Component'));

function App() {
  return (
    <>
      <div>React boilerplate</div>
      <Suspense fallback={<div>load..</div>}>
        <Component />
      </Suspense>
    </>
  );
}

export default App;
