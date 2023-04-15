import React from "react";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default Tab styling from react-tabs package, will change later
import "./EditConstraints.css";

  type Data = {
    ROW: any;
    EMPTY: number;
    power_trace: number;
    signal_trace: number;
    bonding_wire_pad: number;
    power_lead: number;
    signal_lead: number;
    MOS: number;
    cap: number;
  }

  type TableProps = {
    data: Data[];
    setData: (newData: Data[]) => void;
  }

// arrays for all future headers for other tabs from constraints.csv, otehrs will be implemented later
  const tableHeader = ["EMPTY", "power_trace", "signal_trace", "bonding wire pad", "power_lead", "signal_lead", "MOS", "cap"];

  // default values include vertical headers due to what I used to input data into cells
  const DimData = [
    {ROW: "MinWidth", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 4.0, cap: 6.0 }, 
    {ROW: "MinLength", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 6.0, cap: 2.0 },
    {ROW: "MinHorExtension", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 4.0, cap: 6.0 },
    {ROW: "MinVerExtension", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 0, power_lead: 3.0, signal_lead: 1.0, MOS: 6.0, cap: 2.0 }
  ];

  const DefaultValues = [
    {ROW: "1", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "2", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "3", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "4", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "5", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "6", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "7", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
    {ROW: "8", EMPTY: 1, power_trace: 1, signal_trace: 1, bonding_wire_pad: 1, power_lead: 1, signal_lead: 1, MOS: 1, cap: 1 },
  ];

  const horEnc = DefaultValues;
  const verEnc = DefaultValues;
  const horSpa = DefaultValues;
  const verSpa = DefaultValues;

  const Table: React.FC<TableProps> = ({ data, setData }) => {
    const handleEdit = (index: number, property: keyof Data, value: any) => {
      const newData = [...data];
      newData[index] = {...newData[index], [property]: value};
      setData(newData);
    };

    return (
      <table>
      <thead>
        <tr>
          <td className="cellCorner"></td> {/* Modify corner to look cleaner */}
                {tableHeader.map((rows) => {
                  return <th scope="col">{rows}</th>
                })}
        </tr>
      </thead>
      <tbody>
        {data.map((d: any, index) => (
                  <tr key={index}>
                    <th> {d.ROW} </th>
                    <td>
                      <input
                        type="text"
                        value={d.EMPTY}
                        onChange={(e) => handleEdit(index, "EMPTY", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.power_trace}
                        onChange={(e) => handleEdit(index, "power_trace", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.signal_trace}
                        onChange={(e) => handleEdit(index, "signal_trace", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.bonding_wire_pad}
                        onChange={(e) => handleEdit(index, "bonding_wire_pad", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.power_lead}
                        onChange={(e) => handleEdit(index, "power_lead", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.signal_lead}
                        onChange={(e) => handleEdit(index, "signal_lead", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.MOS}
                        onChange={(e) => handleEdit(index, "MOS", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={d.cap}
                        onChange={(e) => handleEdit(index, "cap", e.target.value)}
                      />
                    </td>
                </tr>
              ))}
        </tbody>
      </table>
    );
  };




const EditConstraints: React.FC = () => {
  const [minDimData, setminDimData] = useState(DimData);
  const [horEncData, sethorEncData] = useState(horEnc);
  const [verEncData, setverEncData] = useState(verEnc);
  const [horSpaData, sethorSpaData] = useState(horSpa);
  const [verSpaData, setverSpaData] = useState(verSpa);

  const handleConstraintsContinue = () => { 
    console.log("Edit Constraints Continue")
    console.log(minDimData);
    console.log(horEncData);
    console.log(verEncData);
    console.log(horSpaData);
    console.log(verSpaData);
  }; 

  return (
    <div className="edit-constraints">
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

        <TabPanel>  {/* WILL NEED TO CHANGE/REORGANIZE CLASS NAMES */}
          <div className="min-dimensions"> 
            <Table data={minDimData} setData={setminDimData} />
          </div>
        {/* Rest of panels can be implemented later with their respective data */}
        </TabPanel>

        <TabPanel>
          <div className="min-dimensions"> 
            <Table data={horEncData} setData={sethorEncData} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="min-dimensions">
            <Table data={verEncData} setData={setverEncData} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="min-dimensions"> 
            <Table data={horSpaData} setData={sethorSpaData} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="min-dimensions"> 
            <Table data={verSpaData} setData={setverSpaData} />
          </div>
        </TabPanel>

      </Tabs>
      
      {/* Later implement handle to go to next page */}
      <button onClick={handleConstraintsContinue}>Continue</button>
    </div>
  );


};

export default EditConstraints;