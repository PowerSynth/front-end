import React from "react";
import { useState } from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./ThermalSetupWindow.css";
import {
    Button,
    FocusStyleManager,
    Intent,
    NumericInput,
    NumericInputProps
  } from "@blueprintjs/core";
import { Select2 } from "@blueprintjs/select";

FocusStyleManager.onlyShowFocusOnTabs();

const ThermalSetupWindow: React.FC = () => {
    const stylish = {
        margin: "0;",
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
                <div className="tableDiv"></div>
                <div className="midButtonsDiv">
                    <div>
                    <Button small intent={Intent.PRIMARY} className="midButtons">Add Device</Button>
                    </div>
                    <div>
                    <Button small intent={Intent.PRIMARY} className="midButtons">Remove Device</Button>
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

export default ThermalSetupWindow;