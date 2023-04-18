import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditConstraints from './components/EditConstraints';
import EditLayerStack from './components/EditLayerStack';
import InitialStructureAndLayout from './components/InitialStructureAndLayout';
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/initial-structure-and-layout" element={<InitialStructureAndLayout />} />
        {/* <Route path="/edit-constraints" element={<EditConstraints />} /> */}
      </Routes>
    </div>
  );
};

export default App;
