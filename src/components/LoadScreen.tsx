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

	return (
        <div>
            Loading....
		</div>
	);
};

export default LoadScreen;
