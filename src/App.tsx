import React from 'react';
import Welcome from './pages/Welcome';
import LearningExamples from './components/LearningExamples';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LearningExamples />
    </>
  );
};

export default App; 