import React from "react";
import { useState } from "react";
import "./WelcomePage.css";
import RunProjectPopupWrapper from "./fileUpload/RunProjectPopupWrapper";


const WelcomePage: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const handleOpenManual = () => {

		// Manual V1.9 from E3DA website
		window.open('https://e3da.csce.uark.edu/release/PowerSynth/manual/PowerSynth_v1.9.pdf', '_blank');
	};

	const handleCreateProject = () => {

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
