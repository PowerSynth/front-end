import React from "react";
import { useState } from "react";
import "./WelcomePage.css";
import RunProject from "./popup/RunProject";
import CreateProject from "./popup/CreateProject";
import '@blueprintjs/core/lib/css/blueprint.css';
import './popup/popup.css'
import axios from "axios";



const LoadScreen: React.FC = () => {
	// const [isRunProjectPopupOpen, setIsRunProjectPopupOpen] = useState(false)
	// const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = useState(false)

	//Handle user clicking 'Open Manual' button
	const handleOpenManual = () => {
		// Manual V1.9 from E3DA website
		window.open('https://e3da.csce.uark.edu/release/PowerSynth/manual/PowerSynth_v1.9.pdf', '_blank');
	};


	return (
        <div>
            Loading....
		</div>
	);
};

export default LoadScreen;
