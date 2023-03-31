import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditConstraints from './components/EditConstraints';

const App: React.FC = () => {
  return (
    <div>
      <WelcomePage />
      {/* <EditConstraints /> */}
    </div>
  );
};

export default App;
