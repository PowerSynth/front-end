import React from "react";
import "./TablePages.css";

const EditLayerStack: React.FC = () => {

  {/*
    Hard coded header and data in array from figure 26 to test array to table output
    Later, will take layer_stack.csv and turn it into an array or json to output to table and have ability to edit
  */}
  const header = ["ID", "Name", "Origin", "Width", "Length", "Thickness", "Material", "Type", "Electrical"];
  const dataExample = [
    {ID: 1, Name: "Baseplate", Origin: "0,0", Width: 50, Length: 60, Thickness: 5, Material: "copper", Type: "p", Electrical: "F"},
    {ID: 2, Name: "Bottom_Metal", Origin: "0,0", Width: 40, Length: 50, Thickness: 0.2, Material: "copper", Type: "p", Electrical: "G"},
    {ID: 3, Name: "Ceramic1", Origin: "0,0", Width: 40, Length: 50, Thickness: 0.64, Material: "Al_N", Type: "p", Electrical: "D"},
    {ID: 4, Name: "I1", Origin: "0,0", Width: 40, Length: 50, Thickness: 0.2, Material: "copper", Type: "p", Electrical: "S"},
    {ID: 5, Name: "C1", Origin: "", Width: 40, Length: 50, Thickness: 0.18, Material: "SiC", Type: "a", Electrical: "C"}
  ]

  const handleContinue = () => {
		console.log("Continue Button");
	};


  return (
    <div className="constraint-layerstack-mdk">
      <h2>Edit Layer Stack</h2>
      <h3>
          Please edit the values in the layer_stack.csv file, then click continue.
      </h3>


      {/*
        TABLE: takes data from dataExample array above in that format and should work for data with more or less rows
        currently displays table with hard coded attributes (ID,name,etc), Should work fine if the layer_stack.csv can only contain those attributes
        For future: make editable to allow updating of the the layer_stack data
      */}
      <div className="table-box">
        <table>
          <tr>
            {header.map((rows) => {
              return <th>{rows}</th>
            })}
          </tr>
          {dataExample.map((val, key) => {
            return (
              <tr key={key}>
                <td className="editlayer-col-id">{val.ID}</td> {/* ID column styled differently */}
                <td>{val.Name}</td>
                <td>{val.Origin}</td>
                <td>{val.Width}</td>
                <td>{val.Length}</td>
                <td>{val.Thickness}</td>
                <td>{val.Material}</td>
                <td>{val.Type}</td>
                <td>{val.Electrical}</td>
              </tr>
            )})}
        </table>
      </div>

      {/*
        Button to continue to the next page, not implemented yet
        Currently stays on bottom right of screen no matter the size and zoom, might change in future
      */}
      <button className="layerstack-continue" onClick={handleContinue}>Continue</button>
		</div>
	);
};

export default EditLayerStack;
