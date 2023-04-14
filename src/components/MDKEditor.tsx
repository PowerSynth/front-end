import React, { useState } from "react";
import Papa from 'papaparse';
//TEMPORARY CSS FILE, to be merged with other CSS file
import "./tempMDK.css";

  // todo: Style/format closer to original, merge CSS files, abstract the csv file to json to work with other files for Edit Constraints and Edit Layer Stack pages
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
  const handleMDKEdit = () => {
    console.log("Edit");
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
    <div className = "MDK-edit">
      <h2> PowerSynth MDK Window (Button functionality other than save not implemented) </h2>
      <h3> Import Materials.csv </h3> 
      <div className="import-section">
        <input type="file" accept="text/csv" onChange={handleFileUpload} />
        <button onClick = {convertCsvToJson}>Display Materials</button>
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
          <button onClick={handleMDKEdit}>Edit</button>
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
              /*
          {jsonData.map((CsvData, index) => (
              <tr key = {index}>
                <td className="id-rows"> {index + 1} </td>
                <td> {CsvData.name} </td>
                <td> {CsvData.thermal_cond} </td>
                <td> {CsvData.spec_heat_cap} </td>
                <td> {CsvData.density} </td>
                <td> {CsvData.electical_res} </td>
                <td> {CsvData.rel_permit} </td>
                <td> {CsvData.rel_permeab} </td>
                <td> {CsvData.q3d_id} </td>
                <td> {CsvData.youngmodulus} </td>
                <td> {CsvData.poissons_ratios} </td>
                <td> {CsvData.thermal_expansion_coeffcient} </td>
              </tr>
            ))}
          */

          /* <th> # </th>
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
          */