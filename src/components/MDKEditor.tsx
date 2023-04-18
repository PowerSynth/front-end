import React, { useState } from "react";
import Papa from 'papaparse';
import "./TablePages.css";

  // todo: Style/format closer to original, abstract the csv file to json to work with other files for Edit Constraints page
  // todo potentially: If possible add all button functionality, Implement way to display default materials list, CSV error checking?, input error checking?

type CsvData = {
  [key: string]: string;
};


const MDKEditor: React.FC = () => {
  const handleMDKContinue = () => {
    console.log("Continue");
    console.log(jsonData);
  }
  const handleMDKAdd = () => {
    console.log("Add");
  }
  const handleMDKClone = () => {
    console.log("Clone");
  }
  const handleMDKRemove = () => {
    console.log("Remove");
  }
  const handleMDKSelect = () => {
    console.log("Select");
  }
  const handleMDKLoad = () => {
    console.log("Load");
  }


  const [csvFile, setCsvFile] = useState<File>();
  const [jsonData, setJsonData] = useState<CsvData[]>([]);
  const [editedJsonData, setEditedJsonData] = useState<CsvData[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HandleFileUpload");
    if (event.target.files) {
      setCsvFile(event.target.files[0]);
    }
  };

  const handleCsvParse = (results: Papa.ParseResult<CsvData>) => {
    console.log("handleCsvParse");
    const jsonData = results.data;
    setJsonData(jsonData);
    setEditedJsonData(jsonData);
  };

  const handleCellChange = (newValue: string, rowIndex: number, field: string) => {
    const newEditedJsonData = [...editedJsonData];
    newEditedJsonData[rowIndex][field] = newValue;
    setEditedJsonData(newEditedJsonData);
  };

  const saveChanges = () => {
    console.log("saveChanges");
    setJsonData(editedJsonData);
  };

  const convertCsvToJson = () => {
    console.log("convertCsvToJson");
    if (csvFile) {
      Papa.parse(csvFile, {
        header: true,
        complete: handleCsvParse,
      });
    }
  };


  return (
    <div className = "constraint-layerstack-mdk">
      <h2> PowerSynth MDK Window (Button functionality other than save not implemented) </h2>
      <h3> Import Materials.csv </h3>
      <div className="import-section">
        <input type="file" accept="text/csv" onChange={handleFileUpload} />
        <button className="display-button" onClick = {convertCsvToJson}>Display Materials</button>
      </div>

      <div className = "table-box">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Thermal_Cond </th>
              <th> Spec_Heat_Cap</th>
              <th> Density </th>
              <th> Electrical_Res </th>
              <th> Rel_Permit </th>
              <th> Rel_Permeab </th>
              <th> q3d_id </th>
              <th> Young_Modulus </th>
              <th> Poissons_ratios </th>
              <th> Thermal_Expansion_Coefficient </th>
            </tr>
          </thead>
          <tbody>
          {editedJsonData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.keys(row).map((field, fieldIndex) => (
                    <td key={fieldIndex}>
                      <input
                        type="text"
                        value={row[field]}
                        onChange={(event) =>
                          handleCellChange(event.target.value, rowIndex, field)
                        }
                      />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className= "edit-buttons">
          <button onClick={handleMDKAdd}>Add</button>
          <button onClick={handleMDKClone}>Clone</button>
          <button onClick={handleMDKRemove}>Remove</button>
      </div>
      <div className= "bottom-buttons">
        <button onClick={handleMDKSelect}>Select</button>
        <button onClick={handleMDKLoad}>Load</button>
        <button onClick={saveChanges}>Save</button>
        <button onClick={handleMDKContinue}>Continue</button>
      </div>
    </div>

  );
};

export default MDKEditor;
