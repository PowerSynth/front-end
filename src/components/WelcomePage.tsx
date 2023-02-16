import React from "react";
import "./WelcomePage.css";

const WelcomePage: React.FC = () => {
	const handleOpenManual = () => {
		console.log("Open Manual");
	};

	const handleCreateProject = () => {
		console.log("Create Project");
	};

	const handleRunProject = () => {
		console.log("Run Project");
	};

	return (
        <div className="welcome-page">
            <h1>Welcome to PowerSynth</h1>
			<button onClick={handleOpenManual}>Open Manual</button>
			<button onClick={handleCreateProject}>Create Project</button>
			<button onClick={handleRunProject}>Run Project</button>
		</div>
	);
};

export default WelcomePage;
