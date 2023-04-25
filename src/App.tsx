import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditConstraints from './components/EditConstraints';
import EditLayerStack from './components/EditLayerStack';
import InitialStructureAndLayout from './components/InitialStructureAndLayout';
import SolutionsBrowser from './components/solutionBrowser/SolutionBrowser';
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/initial-structure-and-layout" element={<InitialStructureAndLayout />} />
        <Route path="/edit-constraints" element={<EditConstraints />} />
        <Route path="/edit-layer-stack" element={<EditLayerStack />} />
        {/* <Route path="/solution-browser" element={<SolutionsBrowser /> } /> */}
      </Routes>
    </div>
  );
};

export default App;
