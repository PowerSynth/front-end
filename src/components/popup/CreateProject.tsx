//-------------------------------------------------------------------------------
//Component to create popup when user clicks on 'Create Project' button on welcome page
//Used in 'WelcomePage.tsx'
//-------------------------------------------------------------------------------

import { useState } from "react";
import { Overlay, Classes, Button, Card } from "@blueprintjs/core";
import InitialStructureAndLayout from "../InitialStructureAndLayout";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./popup.css";

const CreateProject: React.FC<{ popupIsOpen: any; closePopup: any }> = ({
	popupIsOpen,
	closePopup,
}) => {
	const [isInitialStructureAndLayoutOpen, setInitialStructureAndLayoutOpen] =
		useState(false);

	//Handle user clicking 'Edit Materials' button, should close popup and go to the MDKEditor
	const handleEditMaterials = () => {
		console.log("Edit Materials Pressed");
		//go to MDKEditor page
		window.open("/mdk-editor", "_self");
	};

	//Handle user clicking 'Defualt Materials' button, should route to initial structure and layout
	const handleDefaultMaterials = () => {
		console.log("Defualt Materials Pressed");
		//route initial structure and layout
		setInitialStructureAndLayoutOpen(
			(wasInitialStructureAndLayoutOpen) => !wasInitialStructureAndLayoutOpen
		);
	};

	const handleCreateLayout = () => {
		window.open("/edit-layer-stack", "_self");
	};

	return (
		<Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={popupIsOpen}>
			<div className="popup-container">
				<Card className="popup-card">
					<div className="popup-title">
						{!isInitialStructureAndLayoutOpen && <p>Edit Materials</p>}
						{isInitialStructureAndLayoutOpen && (
							<p>Initial Structure and Layout</p>
						)}
					</div>
					<div className="popup-container">
						{!isInitialStructureAndLayoutOpen && (
							<p className="popup-container-text">
								Would you like to edit the materials list?<br></br>
								If not, the default materials will be used.
							</p>
						)}
						{isInitialStructureAndLayoutOpen && <InitialStructureAndLayout />}
					</div>
					{!isInitialStructureAndLayoutOpen && (
						<div className="buttons-container">
							<Button
								text="Edit Materials List"
								onClick={handleEditMaterials}
							/>
							<Button
								text="Use Default Materials"
								onClick={handleDefaultMaterials}
							/>
							<Button
								text="Cancel"
								className="cancel-button-full"
								onClick={closePopup}
							/>
						</div>
					)}
					{isInitialStructureAndLayoutOpen && (
						<div className="buttons-container">
							<Button text="Cancel" onClick={closePopup} />
							<Button text="Create Layout" onClick={handleCreateLayout} />
						</div>
					)}
				</Card>
			</div>
		</Overlay>
	);
};
export default CreateProject;
