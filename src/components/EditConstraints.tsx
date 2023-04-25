import React from "react";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Table2, Column, EditableCell2, RowHeaderCell2 } from '@blueprintjs/table';
import { Button, HotkeysProvider } from '@blueprintjs/core';
import Papa from 'papaparse';
import defaultConstraintData from "./defaultJSONData/defaultConstraints.json";
import 'react-tabs/style/react-tabs.css'; // Default Tab styling from react-tabs package
import "./TablePages.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import './popup/popup.css'
import OptimizationSetupPopup from "./optimizationSetup/OptimizationSetup";
// TODO IMPLEMENT CHECK TO KNOW WHEN TO USE DEFAULT CONTRAINTS AND WHEN TO PULL FROM CSV
// TODO TEST WITH CSV
// default values include vertical headers due to what I used to input data into cells

interface TableData {
  "Min Dimensions": any;
  EMPTY: any;
  power_trace: any;
  signal_trace: any;
  "bonding wire pad": any;
  power_lead: any;
  signal_lead: any;
  MOS: any;
  cap: any;
}

interface constraintProp {
  isNewProj: number;
}

const EditConstraints: React.FC<constraintProp> = ({ isNewProj }) => {
  // isNewProj is check to let it know to use default values or constraint csv
  let initialData: TableData[];
  if (isNewProj === 1) {
    // use default values
    initialData = defaultConstraintData;
  }
  else {
    // PLACEHOLDER, will need to pull constraint.csv data
    initialData = defaultConstraintData;
  }

  const [constraintData, setconstraintData] = useState<TableData[]>(initialData);

  const table1 = constraintData.slice(0, 4) as TableData[];
  const table2 = constraintData.slice(5, 13) as TableData[];
  const table3 = constraintData.slice(14, 22) as TableData[];
  const table4 = constraintData.slice(23, 31) as TableData[];
  const table5 = constraintData.slice(32, 40) as TableData[];

  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false)

  const handleConstraintsContinue = () => {
    console.log("Edit Constraints Continue")
    console.log("MinDim Data: ", constraintData);
    // will probably implement json--> csv conversion here if not somewhere else
    // Papaparse has unparse function, can probably find way to overwrite csv file
    // might be better to implement it using a save button to not unnecessary overwrite if no changes made
    const constraintCSV = Papa.unparse(constraintData);
    console.log(constraintCSV);
    setIsOptionsPopupOpen(wasOptionsPopupOpen => !wasOptionsPopupOpen)
  };



  return (
    <HotkeysProvider /* for some reason not having this causes tons of console messages  en scrolling through table*/>
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
        {constraintData.length > 0 ? (
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={table1.length} enableRowHeader={true} >
              <Column name="" cellRenderer={(rowIndex) => (
                <RowHeaderCell2 name={rowIndex === 0 ? "MinWidth" : rowIndex === 1 ? "MinLength" : rowIndex === 2 ? "MinHorExtension": rowIndex === 3 ? "MinVerExtension" : ""}/>
              )}
              />
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].EMPTY = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].power_trace}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].power_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />              
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].signal_trace}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].signal_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="bonding wire pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex]["bonding wire pad"]}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex]["bonding wire pad"] = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].power_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].power_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />   
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].signal_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].signal_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].MOS}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].MOS = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table1[rowIndex].cap}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex].cap = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
            </Table2>
            
          </div>
        </TabPanel>
        ) : null }

      {/* HOR ENC */}
      {constraintData.length > 0 ? (
        <TabPanel>
          <div className="table-box">
          <Table2 numRows={table2.length} enableRowHeader={true} >
            <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].EMPTY = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].power_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />              
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].signal_trace}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].signal_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="bonding wire pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex]["bonding wire pad"]}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5]["bonding wire pad"] = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].power_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].power_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />   
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].signal_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].signal_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].MOS}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].MOS = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table2[rowIndex].cap}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5].cap = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
          </Table2>
          </div>
        </TabPanel>
      ) : null }

      {/* VER ENC */}
      {constraintData.length > 0 ? (
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={table3.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].EMPTY = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].power_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].signal_trace}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].signal_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="bonding wire pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex]["bonding wire pad"]}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9]["bonding wire pad"] = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].power_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].power_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />   
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].signal_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].signal_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].MOS}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].MOS = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table3[rowIndex].cap}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9].cap = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
            </Table2>
          </div>
        </TabPanel>
      ) : null }

      {/* HOR SPA */}
      {constraintData.length > 0 ? (
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={table4.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].EMPTY = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].power_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].signal_trace}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].signal_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="bonding wire pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex]["bonding wire pad"]}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9]["bonding wire pad"] = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].power_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].power_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />   
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].signal_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].signal_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].MOS}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].MOS = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table4[rowIndex].cap}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9].cap = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
            </Table2>
          </div>
        </TabPanel>
      ) : null }

      {/* VER SPA */}
      {constraintData.length > 0 ? (
        <TabPanel>
          <div className="table-box">
            <Table2 numRows={table5.length} enableRowHeader={true} >
              <Column 
                name="EMPTY" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].EMPTY.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].EMPTY = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="power_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].power_trace.toString()}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].power_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />
              <Column 
                name="signal_trace" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].signal_trace}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].signal_trace = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="bonding wire pad" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex]["bonding wire pad"]}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9]["bonding wire pad"] = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />                
              <Column 
                name="power_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].power_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].power_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              />   
              <Column 
                name="signal_lead" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].signal_lead}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].signal_lead = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="MOS" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].MOS}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].MOS = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
              <Column 
                name="cap" 
                cellRenderer={(rowIndex) => (
                  <EditableCell2 value={table5[rowIndex].cap}
                    onConfirm={(value) => {
                      const newData=[...constraintData];
                      newData[rowIndex+5+9+9+9].cap = value;
                      setconstraintData(newData);
                    }}
                  />
                )} 
              /> 
            </Table2>
          </div>
        </TabPanel>
      ) : null }
        
      </Tabs>

      {/* Launches popup to set Optimization Constraints before before running project */}
      <Button className="constraints-continue" onClick={handleConstraintsContinue}>Continue</Button>
        <OptimizationSetupPopup isPopupOpen={isOptionsPopupOpen} />
    </div>
    </HotkeysProvider>
  );


};

export default EditConstraints;
