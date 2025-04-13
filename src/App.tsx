import React from 'react';
import Welcome from './pages/Welcome';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Welcome />
    </>
  );
};

export default App; 