import React from "react";
import { useState } from "react";
import "./WelcomePage.css";
import RunProject from "./fileUpload/RunProjectPopup";
import '@blueprintjs/core/lib/css/blueprint.css';
import './popup.css'
import { Overlay, Classes, Button, Card, Elevation } from "@blueprintjs/core";


const WelcomePage: React.FC = () => {
	const [isRunProjectPopupOpen, setIsRunProjectPopupOpen] = useState(false)

	const handleOpenManual = () => {

		// Manual V1.9 from E3DA website
		window.open('https://e3da.csce.uark.edu/release/PowerSynth/manual/PowerSynth_v1.9.pdf', '_blank');
	};

	const handleCreateProject = () => {

	};

	const handleRunProject = () => {
		console.log("Run Project");
		setIsRunProjectPopupOpen(wasRunProjectPopupOpen => !wasRunProjectPopupOpen);
	};

	const closePopupButton = () => {
		setIsRunProjectPopupOpen(wasRunProjectPopupOpen => !wasRunProjectPopupOpen);
	}

	return (
        <div className="welcome-page" id="WelcomePage">
            <h1>Welcome to PowerSynth</h1>
			<button onClick={handleOpenManual}>Open Manual</button>
			<button onClick={handleCreateProject}>Create Project</button>
			<button onClick={handleRunProject}>Run Project</button>

			{/* This is the popup (overlay) that appears when clicking on run project button -- will be used for create project popup */}
			<Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={isRunProjectPopupOpen}>
				<div className="popup-container">
					<Card className="popup-card">
						<div className="popup-title">
							<p>Run a Project</p>
						</div>
						<div className="popup-container">
							<RunProject />
						</div>
						<div className="buttons-container">
							<Button className="welcome-page-button" text="Run"/>
							<Button text="Cancel" onClick={closePopupButton}/>
						</div>
					</Card>
				</div>
			</Overlay>

		</div>
	);
};

export default WelcomePage;
