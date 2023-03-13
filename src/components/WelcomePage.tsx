import React from "react";
import { useState } from "react";
import "./WelcomePage.css";
import RunProjectPopupWrapper from "./fileUpload/RunProjectPopupWrapper";


const WelcomePage: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const handleOpenManual = () => {
		console.log("Open Manual");
	};

	const handleCreateProject = () => {
		console.log("Create Project");
	};

	const handleRunProject = () => {
		console.log("Run Project");
		setIsModalVisible(wasModalVisible => !wasModalVisible)
	};

	return (
        <div className="welcome-page" id="WelcomePage">
            <h1>Welcome to PowerSynth</h1>
			<button onClick={handleOpenManual}>Open Manual</button>
			<button onClick={handleCreateProject}>Create Project</button>
			<button onClick={handleRunProject}>Run Project</button>
			<RunProjectPopupWrapper isModalVisible={isModalVisible} onBackdropClick={handleRunProject} />
			
		</div>
	);
};

export default WelcomePage;
