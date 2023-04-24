import React from "react";
import { useState } from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./ElectricalSetupWindow.css";
import {
    Button,
    FocusStyleManager,
    NumericInput,
    Tag,
    Divider,
    FileInput
  } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

const ElectricalSetupWindow: React.FC = () => {
    const [traceOrientationFile, setTraceOrientationFile] = useState("Choose file...");
    const [parasiticModelFile, setParasiticModelFile] = useState("Choose file...");
    const [traceOrientationFileSelected, setTraceOrientationFileSelected] = useState(false);
    const [parasiticModelFileSelected, setParasiticModelFileSelected] = useState(false);

    const [tableElements, setTableElements] = useState([]);
    const [numTableElements, setNumTableElements] = useState(0); // These are currently unused

    const handleAddDevice = () => {

    };
    const handleRemoveDevice = () => {

    };

    const handleTraceOrientationFilePath = (event: any) => {
        setTraceOrientationFile(event.target.files[0].name);
        setTraceOrientationFileSelected(true);
    };

    const handleParasiticModelFilePath = (event: any) => {
        setParasiticModelFile(event.target.files[0].name);
        setParasiticModelFileSelected(true);
    };

    return (
        <div className="mainDiv">
            <div className="electricalSetupText">Electrical Setup</div>
            <div className="modelSelectDiv">
                <div>Model Type:</div>
                <div className="bp4-html-select bp4-fill">
                    <select>
                        <option value="1">PEEC</option>
                        <option value="2">FastHenry</option>
                    </select>
                    <span className="bp4-icon bp4-icon-caret-down"></span>
                </div>
            </div>
            <div className="modelSelectDiv">
                <div>Measure Type:</div>
                <div className="bp4-html-select bp4-fill">
                    <select>
                        <option value="1">Inductance</option>
                        <option value="2">Resistance</option>
                    </select>
                    <span className="bp4-icon bp4-icon-caret-down"></span>
                </div>
            </div>
            <div className="textInputBarDiv">
                <div>Measure Name:</div>
                <input className="bp4-input bp4-small bp4-fill" type="text" dir="auto" />
            </div>

            <div className="midSectionDiv">
                <div className="tableDiv">
                    <div className="tableContainer">
                        <div className="tableHeader">
                            <div>Device</div>
                            <div>Options</div>
                        </div>
                        <hr />
                        <ElectricalSetupTableElement key={1} index={1}/>
                        <ElectricalSetupTableElement key={2} index={2}/>
                        <ElectricalSetupTableElement key={3} index={3}/>
                        {/*
                        These three elements are here for example.
                        In the actual project, they should be added from the 'Add Device' button.
                         */}
                    </div>
                </div>

                <div className="midButtonsDiv">
                    <div>
                    <Button small className="midButtons" onClick={handleAddDevice}>Add Device</Button>
                    </div>
                    <div>
                    <Button small className="midButtons" onClick={handleRemoveDevice}>Remove Device</Button>
                    </div>
                </div>
            </div>

            <div className="modelSelectDiv">
                <div>Select a source:</div>
                <div className="bp4-html-select bp4-fill">
                    <select>
                        <option value="1">L1</option>
                        <option value="2">L2</option>
                        <option value="3">L3</option>
                        <option value="4">L4</option>
                        <option value="5">L5</option>
                        <option value="6">L6</option>
                        <option value="7">L7</option>
                    </select>
                    <span className="bp4-icon bp4-icon-caret-down"></span>
                </div>
            </div>
            <div className="modelSelectDiv">
                <div>Select a sink:</div>
                <div className="bp4-html-select bp4-fill">
                    <select>
                        <option value="1">L1</option>
                        <option value="2">L2</option>
                        <option value="3">L3</option>
                        <option value="4">L4</option>
                        <option value="5">L5</option>
                        <option value="6">L6</option>
                        <option value="7">L7</option>
                    </select>
                    <span className="bp4-icon bp4-icon-caret-down"></span>
                </div>
            </div>

            <div className="textInputBarDiv">
                <div> Frequency (KHz):</div>
                <NumericInput buttonPosition="none" small allowNumericCharactersOnly className="numeric-input"></NumericInput>
            </div>

            <div className="modelSelectDiv">
                <div>Path to trace_orientation</div>
                <FileInput hasSelection={traceOrientationFileSelected} text={traceOrientationFile} fill onInputChange={handleTraceOrientationFilePath}/>
            </div>
            <div className="modelSelectDiv">
                <div>Path to parasitic_model</div>
                <FileInput hasSelection={parasiticModelFileSelected} text={parasiticModelFile} fill  onInputChange={handleParasiticModelFilePath}/>
            </div>
        </div>
    );
};

type ElementProps = {
    index: number;
};

const ElectricalSetupTableElement: React.FC<ElementProps> = (props) =>{
    return (
        <div className="tableElement">
            <Tag minimal>{props.index}</Tag>
            <div className="bp4-html-select bp4-fill">
                <select>
                    <option value="1">D1</option>
                    <option value="2">D2</option>
                    <option value="3">D3</option>
                    <option value="4">D4</option>
                </select>
                <span className="bp4-icon bp4-icon-caret-down"></span>
            </div>
            <Divider/>
            <div className="bp4-html-select bp4-fill">
                <select>
                    <option value="1">Drain to Gate</option>
                    <option value="2">Drain to Source</option>
                </select>
                <span className="bp4-icon bp4-icon-caret-down"></span>
            </div>
        </div>
    );
};

export default ElectricalSetupWindow;
