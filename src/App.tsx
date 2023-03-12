import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditLayerStack from './components/EditLayerStack';

const App: React.FC = () => {
  return (
    <div>
      <WelcomePage />
      {/* <EditLayerStack /> */}
    </div>
  );
};

export default App;
