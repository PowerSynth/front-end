//-------------------------------------------------------------------------------
//Component to create a popup when user clicks on 'Run Project' button on welcome page
//Used in 'WelcomePage.tsx'
//-------------------------------------------------------------------------------


import '@blueprintjs/core/lib/css/blueprint.css';
import './popup.css'
import RunProjectComponents from '../fileUpload/RunProjectComponents'
import {  Overlay, Classes, Button, Card } from "@blueprintjs/core";
import axios from "axios";

const RunProject: React.FC<{popupIsOpen: any, closePopup: any}> = ({popupIsOpen, closePopup}) => {

    //Handle user clicking 'Run' button -- to be implemented, needs to send data to backend and go to loading screen & then solutions page
	const handleRunProject = () => {
		console.log("Running...");
        //send data & go to load screen

        //uncomment line below when implementing solutions page functionality and delete this line
        //closePopup();

	};

    return (
        <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={popupIsOpen}>
            <div className="popup-container">
                <Card className="popup-card">
                    <div className="popup-title">
                        <p>Run a Project</p>
                    </div>
                    <div className="popup-container">
                        <RunProjectComponents />
                    </div>
                    <div className="buttons-container">
                        <Button text="Cancel" onClick={closePopup}/>
                        <Button className="welcome-page-button" text="Run" onClick={handleRunProject}/>
                    </div>
                </Card>
            </div>
        </Overlay>
    )
};
export default RunProject
