import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';

import EditConstraints from './components/EditConstraints';
import EditLayerStack from './components/EditLayerStack';
import InitialStructureAndLayout from './components/InitialStructureAndLayout';

const App: React.FC = () => {
  return (
    <div>
      {
      //<InitialStructureAndLayout/>
      }
      <WelcomePage />
    </div>
  );
};

export default App;
