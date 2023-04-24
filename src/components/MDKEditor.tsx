import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import { Table2, Column, EditableCell2 } from '@blueprintjs/table';
import "./TablePages.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

  // Importing existing CSV works, Loading default csv works, editing values works.
  // weird bug currently when editing intially empty cells, updates the data but doesn't update the table until you scroll
  // todo: Add blueprint for rest of ui, FIX WEIRD BUG WITH EDITING EMPTY VALUES
  // todo potentially: add rest of button functionality (add, remove, clone etc)

const defaultMaterialsURL = "https://raw.githubusercontent.com/e3da/PowerSynth1-pkg/master/tech_lib/Material/Materials.csv";

const MDKEditor: React.FC = () => {
  const handleMDKContinue = () => {
    console.log("Continue");
  }
  const handleMDKAdd = () => {
    console.log("Add");
  }
  const handleMDKRemove = () => {
    console.log("Remove");
  }
  const handleMDKSave = () => {
    console.log("Data: ", MDKData);
  }


  interface MDKDataFace {
    name: any;
    thermal_cond: any;
    spec_heat_cap: any;
    density: any;
    electrical_res: any;
    rel_permit: any;
    rel_permeab: any;
    q3d_id: any;
    young_modulus: any;
    poissons_ratios: any;
    thermal_expansion_coeffcient: any; // dumb typo on coeffecient but i'll leave it because it needs to match
  }


  const [MDKData, setMDKData] = useState<MDKDataFace[]>([]);

  const [csvError, setCsvError] = useState<string | null>(null);

  // for now it handles uploaded materials file and then parses into json object then saved to MDKData
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HandleFileUpload");
    const uploadedFile = e.target.files && e.target.files[0];
    if (uploadedFile) {
      Papa.parse(uploadedFile, {
        header: true,
        complete: (results) => {
          const parsedData = results.data as MDKDataFace[];
          setMDKData(parsedData);
        },
        error: (error) => {
          console.error(error);
          setCsvError("Error passing CSV file");
        },
      });
    }
  };
  // Load button loads default materials .csv
  // located on PS github pkg /tech_lib/Material/Materials.csv
  const handleMDKLoad = async () => {
    console.log("Load");
    try {
      const response = await fetch(defaultMaterialsURL);
      const text = await response.text();
      const result = Papa.parse(text, { header: true })
      const parsedData = result.data as MDKDataFace[];
      setMDKData(parsedData);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className = "constraint-layerstack-mdk">
      <h2> PowerSynth MDK Window (Some features missing) </h2>
      <h3> Import Materials.csv </h3>
      <div className="import-section">
        <input type="file" accept="text/csv" onChange={handleFileUpload} />
      </div>

      <div className = "table-box">
      {MDKData.length > 0 ? (
        <Table2 numRows={MDKData.length}>
          <Column
            name="name"
            cellRenderer={(rowIndex) => (
              <EditableCell2
                value={MDKData[rowIndex].name}
                onConfirm={(value) => {
                  const newData=[...MDKData];
                  newData[rowIndex].name = value.toString();
                  setMDKData(newData);
                }}
              />
            )}
          />
          <Column
            name="thermal_cond"
            cellRenderer={(rowIndex) => (
              <EditableCell2
                value={MDKData[rowIndex].thermal_cond}
                onConfirm={(value) => {
                  const newData=[...MDKData];
                  newData[rowIndex].thermal_cond = value;
                  setMDKData(newData);
                }}
              />
            )}
          />
          <Column
            name="spec_heat_cap"
            cellRenderer={(rowIndex) => (
              <EditableCell2
                value={MDKData[rowIndex].spec_heat_cap}
                onConfirm={(value) => {
                  const newData=[...MDKData];
                  newData[rowIndex].spec_heat_cap = value;
                  setMDKData(newData);
                }}
              />
            )}
          />
          <Column
            name="density"
            cellRenderer={(rowIndex) => (
              <EditableCell2
                value={MDKData[rowIndex].density}
                onConfirm={(value) => {
                  const newData=[...MDKData];
                  newData[rowIndex].density = value;
                  setMDKData(newData);
                }}
              />
            )}
          />
          <Column
          name="electrical_res"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].electrical_res}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].electrical_res = value;
                setMDKData(newData);
              }}
            />
          )}
        />
        <Column
          name="rel_permit"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].rel_permit}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].rel_permit = value;
                setMDKData(newData);
              }}
            />
          )}
        />
        <Column
          name="rel_permeab"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].rel_permeab}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].rel_permeab = value;
                setMDKData(newData);
              }}
            />
          )}
        />
        <Column
          name="q3d_id"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].q3d_id}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].q3d_id = value;
                setMDKData(newData);
              }}
            />
          )}
        />
        <Column
          name="young_modulus"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].young_modulus}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].young_modulus = value;
                setMDKData(newData);
              }}
            />
          )}
        />
        <Column
          name="poissons_ratios"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].poissons_ratios}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].poissons_ratios = value;
                setMDKData(newData);
              }}
            />
          )}
        />
        <Column
          name="thermal_expansion_coeffcient"
          cellRenderer={(rowIndex) => (
            <EditableCell2
              value={MDKData[rowIndex].thermal_expansion_coeffcient}
              onConfirm={(value) => {
                const newData=[...MDKData];
                newData[rowIndex].thermal_expansion_coeffcient = value;
                setMDKData(newData);

              }}
            />
          )}
        />
        </Table2>
      ) : null}
      </div>


      <div className= "edit-buttons">
          <button onClick={handleMDKAdd}>Add</button>
          <button onClick={handleMDKRemove}>Remove</button>
      </div>
      <div className= "bottom-buttons">
        <button onClick={handleMDKLoad}>Load</button>
        <button onClick={handleMDKSave}> Save </button>
        <button onClick={handleMDKContinue}>Continue</button>
      </div>
    </div>

  );
};

export default MDKEditor;
