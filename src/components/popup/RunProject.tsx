//-------------------------------------------------------------------------------
//Component to create a popup when user clicks on 'Run Project' button on welcome page
//Used in 'WelcomePage.tsx'
//-------------------------------------------------------------------------------

import React, { useState } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import './popup.css'
import RunProjectComponents from '../fileUpload/RunProjectComponents'
import SolutionsBrowser from "../solutionBrowser/SolutionBrowser";
import {  Overlay, Classes, Button, Card } from "@blueprintjs/core";
import axios from "axios";
import JSZip from "jszip";


const RunProject: React.FC<{popupIsOpen: any, closePopup: any}> = ({popupIsOpen, closePopup}) => {

    const [files, setFiles] = useState<{ name: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [solutionsReceived, setSolutionsReceived] = useState(false);

    //Remove file function
    const removeFile = (filename: any) => {
        setFiles(files.filter(file => file.name !== filename))
    }

    //Files form to be posted to backend
    const formData = new FormData();

    //Handle user clicking 'Run' button -- to be implemented, needs to send data to backend and go to loading screen & then solutions page
	const handleRunProject = () => {
		console.log("Running...");
        
        //Render loading screen variable
        setIsLoading(true);

        //Appending files to the formData
        files.map((f: any) => {formData.append("file", f)});
        
        //Post to backend
        axios.post('http://localhost:8080/api/powersynth', formData, {headers:{"Content-Type": "multipart/form-data"}})
        .then((res: any) =>{

            //Rendering solutions page
            setIsLoading(false);
            setSolutionsReceived(true);

            // Unzipping file - currently doesn't work because the returned file from the response is not the correct format
            // commented out to prevent error
            // In meantime, result images are being pulled from a temp folder in solutions browser
            // Once this is fixed, the unzipped contents should be passed as props in solution browser component at bottom

            //Unzip
            // const zip = new JSZip();
            // var fileToUnzip = res.data.results.file
            // var unzip = zip.loadAsync(fileToUnzip);
            // var solutionFiles: any;
            // unzip.then((contents: any) => {
            //     solutionFiles = contents.files;
            // }) 

            

        })
        .catch((err: any) => {
            console.log(err)
        })
	};

    return (
        <div>
            {!solutionsReceived &&
                <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={popupIsOpen}>
                    <div className="popup-container">
                        <Card className="popup-card">
                            <div className="popup-title">
                                <p>Run a Project</p>
                            </div>
                            <div className="popup-container">
                                <RunProjectComponents files={files} setFiles={setFiles} removeFile={removeFile} />
                            </div>
                            <div className="buttons-container">
                                <Button text="Cancel" onClick={closePopup}/>
                                <Button className="welcome-page-button" text="Run" onClick={handleRunProject}/>
                            </div>
                        
                        </Card>
                    </div>
                </Overlay>
            }
            {isLoading &&
                <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={popupIsOpen}>
                    <div style={{width: "100%", height: "100vh", backgroundColor: "lightgray"}}><h1>Loading</h1></div>
                </Overlay>
            }
            {solutionsReceived &&
                <SolutionsBrowser />
            }
        </div>
    )
};
export default RunProject
