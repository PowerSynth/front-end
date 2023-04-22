import React from "react";
import { useState } from "react";
import "./WelcomePage.css";
import RunProject from "./popup/RunProject";
import CreateProject from "./popup/CreateProject";
import '@blueprintjs/core/lib/css/blueprint.css';
import './popup/popup.css'
import PowerSynthLogo from './photos/PowerSynthLogo.png'



const WelcomePage: React.FC = () => {
	const [isRunProjectPopupOpen, setIsRunProjectPopupOpen] = useState(false)
	const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = useState(false)

	//Handle user clicking 'Open Manual' button
	const handleOpenManual = () => {

		// Manual V1.9 from E3DA website
		window.open('https://e3da.csce.uark.edu/release/PowerSynth/manual/PowerSynth_v1.9.pdf', '_blank');
	};

	//Handle user clicking 'Create Project' button
	const handleCreateProject = () => {
		console.log("Create Project")
		setIsCreateProjectPopupOpen(wasCreateProjectPopupOpen => !wasCreateProjectPopupOpen)
	};

	//Handle user clicking 'Run Project' button
	const handleRunProject = () => {
		console.log("Run Project");
		setIsRunProjectPopupOpen(wasRunProjectPopupOpen => !wasRunProjectPopupOpen);
	};

	//Handle user clicking 'Cancel' button in popup that appears
	const closePopupButton = () => {
		if (isCreateProjectPopupOpen) {
			setIsCreateProjectPopupOpen(wasRunProjectPopupOpen => !wasRunProjectPopupOpen)
			console.log('closing create')
		}
		if (isRunProjectPopupOpen) {
			setIsRunProjectPopupOpen(wasRunProjectPopupOpen => !wasRunProjectPopupOpen);
			console.log('closing run')
		}
	}

	return (
        <div className="welcome-page" id="WelcomePage">
			<img src={PowerSynthLogo} id="power-synth-logo"></img>
            <h1>Welcome to PowerSynth!</h1>
			<button onClick={handleOpenManual}>Open Manual</button>
			<button onClick={handleCreateProject}>Create Project</button>
			<button onClick={handleRunProject}>Run Project</button>

			{/* This is the popup (overlay) that appears when clicking 'Create Project' or 'Run Project' buttons */}
			{/* Create Project Button Pressed */}
			{isCreateProjectPopupOpen &&
				<CreateProject popupIsOpen={isCreateProjectPopupOpen} closePopup={closePopupButton} />
			}
			{/* Run Project Button Pressed */}
			{isRunProjectPopupOpen &&
				<RunProject popupIsOpen={isRunProjectPopupOpen} closePopup={closePopupButton} />
			}
		</div>
	);
};

export default WelcomePage;
