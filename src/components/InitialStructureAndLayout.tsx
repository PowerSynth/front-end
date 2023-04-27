import React from "react";
import { useState } from "react";
import "./InitialStructureAndLayout.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import { FileInput } from "@blueprintjs/core";

const InitialStructureAndLayout: React.FC = () => {
    const DropDownButton = () =>{
        document.getElementById("dropdown-content")?.classList.toggle("show-dropdown");
    };
    // TODO: Finish the dropdown button functionality and program it the React way instead of the default JavaScript way.

    //Hanlding Layer Stack File Upload
    const [layerStackFile, setLayerStackFile] = useState("Choose file...");
    const [layerStackFileSelected, setLayerStackFileSelected] = useState(false);

    const handleLayerStackFilePath = (event: any) => {
        setLayerStackFile(event.target.files[0].name);
        setLayerStackFileSelected(true);
    };

    const [layoutScriptFile, setLayoutScriptFile] = useState("Choose file...");
    const [layoutScriptFileSelected, setLayoutScriptFileSelected] = useState(false);

    const handleLayoutScriptFilePath = (event: any) => {
        setLayoutScriptFile(event.target.files[0].name);
        setLayoutScriptFileSelected(true);
    };

    const [connectivityScriptFile, setConnectivityScriptFile] = useState("Choose file (optional)...");
    const [connectivityScriptFileSelected, setConnectivityScriptFileSelected] = useState(false);

    const handleConnectivityScriptFilePath = (event: any) => {
        setConnectivityScriptFile(event.target.files[0].name);
        setConnectivityScriptFileSelected(true);
    };

    return(
        <div className="InitialStructureAndLayout">
            <div className="top-row">
            <button>Get Settings.info File</button>
            </div>
            <div className="row">
                <div>Open layer_stack</div>
                <FileInput hasSelection={layerStackFileSelected} text={layerStackFile} onInputChange={handleLayerStackFilePath}/>
            </div>
            <div className="row">
                <div>Open layout_script</div>
                <FileInput hasSelection={layoutScriptFileSelected} text={layoutScriptFile} onInputChange={handleLayoutScriptFilePath}/>
            </div>
            <div className="row">
                <div>Open Connectivity_script</div>
                <FileInput hasSelection={connectivityScriptFileSelected} text={connectivityScriptFile} onInputChange={handleConnectivityScriptFilePath}/>
            </div>
            <div className="row">
                <div>Reliability Constraints</div>
                <div className="dropdown">
                    <select disabled={false} style={{}}><option>no constraints</option><option>average case</option><option>worst case consideration</option></select>
                    {/* <button className="dropdown-button" onClick={DropDownButton}>no constraints ...</button>
                    <div className="dropdown-content" id="dropdown-content">
                        <div className="dropdown-element">Item 1</div>
                        <div className="dropdown-element">Item 2</div>
                        <div className="dropdown-element">Item 3</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default InitialStructureAndLayout;
