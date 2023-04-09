import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';

import EditConstraints from './components/EditConstraints';
import EditLayerStack from './components/EditLayerStack';

const App: React.FC = () => {
  return (
    <div>
      <WelcomePage />

      {/* <EditConstraints /> */}
      {/* <EditLayerStack /> */}

    </div>
  );
};

export default App;
