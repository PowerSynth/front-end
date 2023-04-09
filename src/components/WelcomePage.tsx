import React from "react";
import "./WelcomePage.css";

const WelcomePage: React.FC = () => {
	const handleOpenManual = () => {
		
		// Manual V1.9 from E3DA website
		window.open('https://e3da.csce.uark.edu/release/PowerSynth/manual/PowerSynth_v1.9.pdf', '_blank');
	};

	const handleCreateProject = () => {
		
	};

	const handleRunProject = () => {
		
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
