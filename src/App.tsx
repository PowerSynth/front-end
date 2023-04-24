import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditConstraints from './components/EditConstraints';
import EditLayerStack from './components/EditLayerStack';
import InitialStructureAndLayout from './components/InitialStructureAndLayout';
import ThermalSetupWindow from './components/optimizationSetup/ThermalSetupWIndow';
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => { //Replaced WelcomePage with ThermalSetupWindow for testing purposes. Leaving this here in case I forget to change it back...
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/initial-structure-and-layout" element={<InitialStructureAndLayout />} />
        <Route path="/edit-constraints" element={<EditConstraints />} />
        <Route path="/edit-layer-stack" element={<EditLayerStack />} />
      </Routes>
    </div>
  );
};

export default App;
