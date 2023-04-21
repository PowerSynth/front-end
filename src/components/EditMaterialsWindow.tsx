import React from "react";
import "./EditMaterialsWindow.css";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import {
    Button,
    FocusStyleManager,
    Intent
  } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

const EditMaterialsWindow: React.FC = () => {


	const handleEditMaterialsButton = () => {

	};

    const handleUseDefaultMaterialsButton = () => {
		console.log("goncratuladions you did a button");
	};

    return(
        <div className="mainDiv">
                <div>Would you like to edit the materials list?</div>
                <div>If not, the default materials will be used.</div>
                <div className="button-flex">
                <Button intent={Intent.PRIMARY} fill={false} onClick={handleEditMaterialsButton} small text="Edit Materials List" />
                <div></div>
                <Button intent={Intent.PRIMARY} fill={false} onClick={handleUseDefaultMaterialsButton} small text="Use Default Materials" />
                </div>
        </div>
    );
};

export default EditMaterialsWindow;
