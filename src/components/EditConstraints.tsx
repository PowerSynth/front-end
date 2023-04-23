import React from "react";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Table2, Column, EditableCell2, RowHeaderCell2 } from '@blueprintjs/table';
import 'react-tabs/style/react-tabs.css'; // Default Tab styling from react-tabs package
import "./TablePages.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import './popup/popup.css'
import OptimizationSetupPopup from "./optimizationSetup/OptimizationSetup";
// TODO IMPLEMENT CHECK TO KNOW WHEN TO USE DEFAULT CONTRAINTS AND WHEN TO PULL FROM CSV

// default values include vertical headers due to what I used to input data into cells

interface TableData {
  EMPTY: any;
  power_trace: any;
  signal_trace: any;
  bonding_wire_pad: any;
  power_lead: any;
  signal_lead: any;
  MOS: any;
  cap: any;
}

// Data was not being correctly updated when I tried to assign the data in a better way
const initialDim: TableData[] = [
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 4.0, cap: 6.0 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 6.0, cap: 2.0 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 4.0, cap: 6.0 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 6.0, cap: 2.0 }
];
const initialhorEnc: TableData[] = [ 
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 }
];
const initialverEnc: TableData[] = [
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 }
];
const initialhorSpa: TableData[] = [ 
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 }
  ];
const initialverSpa: TableData[] = [ 
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  { EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 }
  ];



const EditConstraints: React.FC = () => {
  const [minDimData, setminDimData] = useState<TableData[]>(initialDim);
  const [horEncData, sethorEncData] = useState<TableData[]>(initialhorEnc);
  const [verEncData, setverEncData] = useState<TableData[]>(initialverEnc);
  const [horSpaData, sethorSpaData] = useState<TableData[]>(initialhorSpa);
  const [verSpaData, setverSpaData] = useState<TableData[]>(initialverSpa);
  
  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false)

  const handleConstraintsContinue = () => {
    console.log("Edit Constraints Continue")
    console.log("MinDim Data: ", minDimData);
    console.log("horEnc Data: ", horEncData);
    console.log("verEnc Data: ", verEncData);
    console.log("hprSpa Data: ", horSpaData);
    console.log("verSpa Data: ", verSpaData);
    // will probably implement json--> csv conversion here if not somewhere else

    setIsOptionsPopupOpen(wasOptionsPopupOpen => !wasOptionsPopupOpen)
  };

  return (
    <div className="constraint-layerstack-mdk">
      <h2> Edit Constraints </h2>
      <h3> Please edit the values in the constraints.csv file, then click continue. </h3>

      {/* react-tabs implementation */}
      <Tabs defaultIndex={0} >

        {/* Names for tabs */}
        <TabList>
          <Tab>Min Dimensions</Tab>
          <Tab>MinHorEnclosure</Tab>
          <Tab>MinVerEnclosure</Tab>
          <Tab>MinhorSpacing</Tab>
          <Tab>MinVerSpacing</Tab>
        </TabList>

        {/* MIN DIMENSIONS */}
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={minDimData.length} enableRowHeader={true} >
              <Column name="" cellRenderer={(rowIndex) => (
                <RowHeaderCell2 name={rowIndex === 0 ? "MinWidth" : rowIndex === 1 ? "MinLength" : rowIndex === 2 ? "MinHorExtension": rowIndex === 3 ? "MinVerExtension" : ""}/>
              )}
              />
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].EMPTY = value;
                      setminDimData(newData);
                    }}
                  />
                )}
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].power_trace = value;
                      setminDimData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].signal_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].signal_trace = value;
                      setminDimData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="bonding_wire_pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].bonding_wire_pad.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].bonding_wire_pad = value;
                      setminDimData(newData);
                    }}                  />
                )}
              />
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].power_lead.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].power_lead = value;
                      setminDimData(newData);
                    }}                  />
                )}
              />
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].signal_lead = value;
                      setminDimData(newData);
                    }}                  />
                )}
              />
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].MOS.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].MOS = value;
                      setminDimData(newData);
                    }}                  />
                )}
              />
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={minDimData[rowIndex].cap.toString()}
                    onConfirm={(value) => {
                      const newData = [...minDimData];
                      newData[rowIndex].cap = value;
                      setminDimData(newData);
                    }}                  />
                )}
              />
            </Table2>
          </div>
        </TabPanel>
        
        {/* MIN HOR ENCLOSURE */}
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={horEncData.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].EMPTY = value;
                      sethorEncData(newData);
                    }}
                  />
                )}
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].power_trace = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].signal_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].signal_trace = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="bonding_wire_pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].bonding_wire_pad.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].bonding_wire_pad = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].power_lead.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].power_lead = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].signal_lead = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].MOS.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].MOS = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horEncData[rowIndex].cap.toString()}
                    onConfirm={(value) => {
                      const newData = [...horEncData];
                      newData[rowIndex].cap = value;
                      sethorEncData(newData);
                    }}                  
                  />
                )}
              />
            </Table2>
          </div>
        </TabPanel>

        {/* MIN VER ENCLOSURE */}
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={verEncData.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].EMPTY = value;
                      setverEncData(newData);
                    }}
                  />
                )}
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].power_trace = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].signal_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].signal_trace = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="bonding_wire_pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].bonding_wire_pad.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].bonding_wire_pad = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].power_lead.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].power_lead = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].signal_lead = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].MOS.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].MOS = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verEncData[rowIndex].cap.toString()}
                    onConfirm={(value) => {
                      const newData = [...verEncData];
                      newData[rowIndex].cap = value;
                      setverEncData(newData);
                    }}                  
                  />
                )}
              />
            </Table2> 
          </div>
        </TabPanel>

        {/* MIN HOR SPACING */}
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={horSpaData.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].EMPTY = value;
                      sethorSpaData(newData);
                    }}
                  />
                )}
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].power_trace = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].signal_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].signal_trace = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="bonding_wire_pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].bonding_wire_pad.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].bonding_wire_pad = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].power_lead.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].power_lead = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].signal_lead = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].MOS.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].MOS = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={horSpaData[rowIndex].cap.toString()}
                    onConfirm={(value) => {
                      const newData = [...horSpaData];
                      newData[rowIndex].cap = value;
                      sethorSpaData(newData);
                    }}                  
                  />
                )}
              />
            </Table2>
          </div>
        </TabPanel>

        {/* MIN VER SPACING */}
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={verSpaData.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].EMPTY = value;
                      setverSpaData(newData);
                    }}
                  />
                )}
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].power_trace = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].signal_trace.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].signal_trace = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="bonding_wire_pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].bonding_wire_pad.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].bonding_wire_pad = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].power_lead.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].power_lead = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].signal_lead = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].MOS.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].MOS = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2
                    value={verSpaData[rowIndex].cap.toString()}
                    onConfirm={(value) => {
                      const newData = [...verSpaData];
                      newData[rowIndex].cap = value;
                      setverSpaData(newData);
                    }}                  
                  />
                )}
              />
            </Table2>
          </div>
        </TabPanel>

      </Tabs>

      {/* Launches popup to set Optimization Constraints before before running project */}
      <button className="constraints-continue" onClick={handleConstraintsContinue}>Continue</button>
        <OptimizationSetupPopup isPopupOpen={isOptionsPopupOpen} />
    </div>
  );


};

export default EditConstraints;
