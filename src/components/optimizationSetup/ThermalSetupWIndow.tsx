import React from "react";
import { useState } from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./ThermalSetupWindow.css";
import {
    Button,
    FocusStyleManager,
    NumericInput,
    Tag,
    Divider
  } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

const ThermalSetupWindow: React.FC = () => {
    const [tableElements, setTableElements] = useState([]);
    const [numTableElements, setNumTableElements] = useState(0); // These are currently unused

    const handleAddDevice = () => {

    };
    const handleRemoveDevice = () => {

    };

    return (
        <div className="mainDiv">
            <div className="thermalSetupText">Thermal Setup</div>
            <div className="modelSelectDiv">
                <div>Model Select:</div>
                <div className="bp4-html-select bp4-fill">
                    <select disabled>
                        <option value="1">ParaPower</option>
                    </select>
                    <span className="bp4-icon bp4-icon-caret-down"></span>
                </div>
            </div>
            <div className="textInputBarDiv">
                <div>Measure Name:</div>
                <input className="bp4-input bp4-fill bp4-small" type="text" dir="auto" />
            </div>

            <div className="midSectionDiv">
                <div className="tableDiv">
                    <div className="tableContainer">
                        <div className="tableHeader">
                            <div>Device</div>
                            <div>Power</div>
                        </div>
                        <hr />
                        <ThermalSetupTableElement key={1} index={1}/>
                        <ThermalSetupTableElement key={2} index={2}/>
                        <ThermalSetupTableElement key={3} index={3}/>
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
                    <Button small className="midButtons">Remove Device</Button>
                    </div>
                </div>
            </div>

            <div className="textInputBarDiv">
                <div> Heat Convection:</div>
                <NumericInput buttonPosition="none" small allowNumericCharactersOnly className="numeric-input"></NumericInput>
            </div>
            <div className="textInputBarDiv">
                <div> Ambient Temperature:</div>
                <NumericInput buttonPosition="none" small allowNumericCharactersOnly className="numeric-input"></NumericInput>
            </div>
        </div>
    );
};

type ElementProps = {
    index: number;
};

const ThermalSetupTableElement: React.FC<ElementProps> = (props) =>{
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
            <input className="bp4-input bp4-fill" type="number" dir="auto" />
        </div>
    );
};

export default ThermalSetupWindow;
