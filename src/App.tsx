import React from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import EditConstraints from './components/EditConstraints';
import MDKEditor from './components/MDKEditor';
import EditLayerStack from './components/EditLayerStack';
import InitialStructureAndLayout from './components/InitialStructureAndLayout';
import ElectricalSetupWindow from './components/optimizationSetup/ElectricalSetupWindow';
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/initial-structure-and-layout" element={<InitialStructureAndLayout />} />
        <Route path="/edit-constraints" element={<EditConstraints isNewProj={1} />} /> {/* isNewProj, if = 1 --> new project, else --> Run project */}
        <Route path="/edit-layer-stack" element={<EditLayerStack />} />
        <Route path="/mdk-editor" element={<MDKEditor />} />
      </Routes>
    </div>
  );
};

export default App;
