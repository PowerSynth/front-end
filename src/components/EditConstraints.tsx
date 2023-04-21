import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default Tab styling from react-tabs package, will change later
import "./ConstraintLayerStack.css";
import { useState } from "react";
import './popup/popup.css'
import OptimizationSetupPopup from "./optimizationSetup/OptimizationSetup";

const EditConstraints: React.FC = () => {
  // arrays for all future headers for other tabs from constraints.csv, otehrs will be implemented later
  const minDimHeader = ["EMPTY", "power_trace", "signal_trace", "bonding wire pad", "power_lead", "signal_lead", "MOS", "cap"];
  /*
  const HorEncHeader = [];
  const VerEncHeader = [];
  const HorSpaHeader = [];
  const VerSpaHeader = [];
  */

  // default values include vertical headers due to what I used to input data into cells
  const MinDimDefaultValues = [
    {ROW: "MinWidth", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 4.0, cap: 6.0 }, 
    {ROW: "MinLength", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 6.0, cap: 2.0 },
    {ROW: "MinHorExtension", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 4.0, cap: 6.0 },
    {ROW: "MinVerExtension", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 6.0, cap: 2.0 }
  ];

  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false)

  const handleConstraintsContinue = () => { 
    console.log("Edit Constraints Continue")
    setIsOptionsPopupOpen(wasOptionsPopupOpen => !wasOptionsPopupOpen)
  };

  return (
    <div className="constraint-layerstack">
      <h2> Edit Constraints </h2>
      <h3> Please edit the values in the constraints.csv file, then click continue. </h3>
      
      {/* react-tabs implementation */}
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        
        {/* Names for tabs */}
        <TabList>  
          <Tab>Min Dimensions</Tab>
          <Tab>MinHorEnclosure</Tab>
          <Tab>MinVerEnclosure</Tab>
          <Tab>MinhorSpacing</Tab>
          <Tab>MinVerSpacing</Tab>
        </TabList>

        {/* TabPanel is where contents of each tab need to be placed */}
        <TabPanel> 
          <div className="table-box">
            <table>
              <tr>
                <td className="constraints-cellCorner"></td> {/* Modify corner to look cleaner */}
                {minDimHeader.map((rows) => {
                  return <th scope="col">{rows}</th>
                })}
              </tr>
              
              {/* Input all data rows */}
              {MinDimDefaultValues.map((val, key)=> {
                return (
                  <tr key={key}>
                    <th>{val.ROW} </th>
                    <td>{val.EMPTY}</td>
                    <td>{val.power_trace}</td>
                    <td>{val.signal_trace}</td>
                    <td>{val.bonding_wire_pad}</td>
                    <td>{val.power_lead}</td>
                    <td>{val.signal_lead}</td>
                    <td>{val.MOS}</td>
                    <td>{val.cap}</td>
                  </tr>
                )})}
            </table>
          </div>
        {/* Rest of panels can be implemented later with their respective data */}
        </TabPanel>
        <TabPanel>
          <h2> MinHorEnclosure </h2>
        </TabPanel>
        <TabPanel>
          <h2> MinVerEnclosure </h2>
        </TabPanel>
        <TabPanel>
          <h2> MinHorSpacing </h2>
        </TabPanel>
        <TabPanel>
          <h2> MinVerSpacing </h2>
        </TabPanel>

      </Tabs>
      
      {/* Launches popup to set Optimization Constraints before before running project */}
      <button onClick={handleConstraintsContinue}>Continue</button>
        <OptimizationSetupPopup isPopupOpen={isOptionsPopupOpen} />
    </div>
  );


};

export default EditConstraints;