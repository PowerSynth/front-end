import React from "react";
import { useState } from 'react';
import { Table2, Column, EditableCell2 } from '@blueprintjs/table';
import "./TablePages.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';


// TODO FIX EMPTY INITIAL CELL NOT UPDATING CORRECTLY ON TABLE (JSON UPDATES CORRECTLY)
interface TableData1 {
  ID: any;
  Name: any;
  Origin: any;
  Width: any;
  Length: any;
  Thickness: any;
  Material: any;
  Type: any;
  Electrical: any;
}

const initialLayerStack: TableData1[] = [
  {ID: 1, Name: "Baseplate", Origin: "0,0", Width: 50, Length: 60, Thickness: 5, Material: "copper", Type: "p", Electrical: "F"},
  {ID: 2, Name: "Bottom_Metal", Origin: "0,0", Width: 40, Length: 50, Thickness: 0.2, Material: "copper", Type: "p", Electrical: "G"},
  {ID: 3, Name: "Ceramic1", Origin: "0,0", Width: 40, Length: 50, Thickness: 0.64, Material: "Al_N", Type: "p", Electrical: "D"},
  {ID: 4, Name: "I1", Origin: "0,0", Width: 40, Length: 50, Thickness: 0.2, Material: "copper", Type: "p", Electrical: "S"},
  {ID: 5, Name: "C1", Origin: '', Width: 40, Length: 50, Thickness: 0.18, Material: "SiC", Type: "a", Electrical: "C"}
]

// TODO ?
const EditLayerStack: React.FC = () => {
  const [layerStackData, setlayerStackData] = useState<TableData1[]>(initialLayerStack);

  const handleContinue = () => {
		console.log("Continue Button");
    console.log("New Layer Stack Data: ", layerStackData);
    window.open("/edit-constraints", "_self");
	};


  return (
    <div className="constraint-layerstack-mdk">
      <h2>Edit Layer Stack</h2>
      <h3>
          Please edit the values in the layer_stack.csv file, then click continue.
      </h3>


      {/*
        TABLE: hard-coded columns 
        pulls data from JSON object that gets updated into layerStackData
      */}
      <div className="table-box">
        <Table2 numRows={layerStackData.length} enableRowHeader={false}>
          {/* ID COLUMN */}
          <Column 
            name="ID" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].ID.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].ID = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
          />

          {/* NAME COLUMN */}
          <Column 
            name="Name" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Name.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Name = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* ORIGIN COLUMN */}
          <Column 
            name="Origin" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Origin.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Origin = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* WIDTH COLUMN */}
          <Column 
            name="Width" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Width.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Width = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* LENGTH COLUMN */}
          <Column 
            name="Length" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Length.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Length = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* THICKNESS COLUMN */}
          <Column 
            name="Thickness" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Thickness.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Thickness = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* MATERIAL COLUMN */}
          <Column 
            name="Material" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Material.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Material = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* TYPE COLUMN */}
          <Column 
            name="Type" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Type.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Type = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />

          {/* ELECTRICAL COLUMN */}
          <Column 
            name="Electrical" 
              cellRenderer={(rowIndex) => (
                <EditableCell2
                  value={layerStackData[rowIndex].Electrical.toString()}
                  onConfirm={(value) => {
                    const newData = [...layerStackData];
                    newData[rowIndex].Electrical = value;
                    setlayerStackData(newData);
                  }}
                />
              )}
            />
        </Table2>
      </div>

      {/*
         Currently stays on bottom right of screen no matter the size and zoom, might change in future
      */}
      <button className="layerstack-continue" onClick={handleContinue}>Continue</button>
		</div>
	);
};

export default EditLayerStack;
