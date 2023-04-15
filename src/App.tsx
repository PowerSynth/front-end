import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditConstraints from './components/EditConstraints';
import MDKEditor from './components/MDKEditor';

const App: React.FC = () => {
  return (
    <div>
      <WelcomePage /> 
    </div>
  );
};

export default App;
