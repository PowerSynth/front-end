//-------------------------------------------------------------------------------
//Component to create the Optimization Setup popup
//Used in 'EditConstraints.tsx'
//-------------------------------------------------------------------------------

import { useState } from "react";
import {  Overlay, Classes, Button, Card } from "@blueprintjs/core";
import OptimizationBody from "./OptionBody";
import './OptimizationSetup.css'
import '@blueprintjs/core/lib/css/blueprint.css';
import '../popup/popup.css'
import ThermalSetupWindow from "./ThermalSetupWIndow";
import SolutionsBrowser from "../solutionBrowser/SolutionBrowser";

interface solutionImageData {
    name: string;
    url: string;
    blob: Blob;
    toDownload: boolean;
}

const OptimizationSetupPopup: React.FC<{isPopupOpen: boolean}> = ({isPopupOpen}) => {
    const [isOptionOneOpen, setIsOptionOneOpen] = useState(false)
    const [isOptionTwoOpen, setIsOptionTwoOpen] = useState(false)
    const [isOptionThreeOpen, setIsOptionThreeOpen] = useState(false)
    const [isElectricalSetupOpen, setIsElectricalSetupOpen] = useState(false)
    const [isThermalSetupOpen, setIsThermalSetupOpen] = useState(false)
    const [optionOneWasOpen, setOptionOneWasOpen] = useState(false)
    const [optionThreeWasOpen, setOptionThreeWasOpen] = useState(false)
    const [isSolutionBroswerOpen, setIsSolutionBrowserOpen] = useState(false)
    const [imageFiles, setImageFiles] = useState<{ name: any }[]>([]);

    const handleOptionOne = () => {
        setIsOptionOneOpen(wasOptionsOneOpen => !wasOptionsOneOpen)
    }
    const handleOptionTwo = () => {
        setIsOptionTwoOpen(wasOptionsTwoOpen => !wasOptionsTwoOpen)
    }
    const handleOptionThree = () => {
        setIsOptionThreeOpen(wasOptionsThreeOpen => !wasOptionsThreeOpen)
    }

    const handleElectricalSetupButton = () => {
        setIsElectricalSetupOpen(wasElectricalSetupOpen => !wasElectricalSetupOpen)
        if (isOptionOneOpen) {
            setIsOptionOneOpen(false)
            setOptionOneWasOpen(true)
        }
        if (optionOneWasOpen) {
            setIsOptionOneOpen(true)
            setOptionOneWasOpen(false)
        }
        if (isOptionThreeOpen) {
            setIsOptionThreeOpen(false)
            setOptionThreeWasOpen(true)
        }
        if (optionThreeWasOpen) {
            setIsOptionThreeOpen(true)
            setOptionThreeWasOpen(false)
        }

    }

    const handleThermalSetupButton = () => {
        setIsThermalSetupOpen(wasThermalSetupOpen => !wasThermalSetupOpen)
        if (isOptionOneOpen) {
            setIsOptionOneOpen(false)
            setOptionOneWasOpen(true)
        }
        if (optionOneWasOpen) {
            setIsOptionOneOpen(true)
            setOptionOneWasOpen(false)
        }
        if (isOptionThreeOpen) {
            setIsOptionThreeOpen(false)
            setOptionThreeWasOpen(true)
        }
        if (optionThreeWasOpen) {
            setIsOptionThreeOpen(true)
            setOptionThreeWasOpen(false)
        }
    }

    //Function to handle clicking 'run powersynth', needs to be implemented; will send data to backend and route to solutions browser
    //Currently just routing to home page
    const handleRunPowerSynth = () => {
        console.log('Running PowerSynth!')
        //window.open("/", '_self');
        setIsOptionOneOpen(false);
        setIsOptionTwoOpen(false);
        setIsOptionThreeOpen(false);
        const solutionImage: solutionImageData = {
            name: "",
            url: "",
            blob: new Blob(),
            toDownload: false
        }
        setImageFiles((images: any) => [...images, solutionImage]);
        setIsSolutionBrowserOpen(true);

    }

    return (
        <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={isPopupOpen || isOptionOneOpen || isOptionTwoOpen || isOptionThreeOpen}>
            <div className="popup-container">
                {!isOptionOneOpen && !isOptionTwoOpen && !isOptionThreeOpen && !isElectricalSetupOpen && !isThermalSetupOpen &&
                    <Card className="popup-card">
                        <div className="popup-title">
                            <p>Options</p>
                        </div>
                        <div className="popup-container">
                            <p className="popup-container-text">How would you like to run PowerSynth?</p>
                        </div>
                        <div className="buttons-container">
                            <Button text="Initial Layout Evaluation"  onClick={handleOptionOne}/>
                            <Button text="Layout Solution Generation Only" onClick={handleOptionTwo}/>
                            <Button text="Layout Optimization/Evaluation" className="buttons-full" onClick={handleOptionThree}/>
                        </div>
                    </Card>
                }
                {(isOptionOneOpen || isOptionTwoOpen || isOptionThreeOpen) &&
                    <Card className="popup-card">
                        <div className="popup-title">
                            <p>Optimization Setup</p>
                        </div>
                        <OptimizationBody OptionOne={isOptionOneOpen} OptionTwo={isOptionTwoOpen} OptionThree={isOptionThreeOpen} HandleElectricalSetup={handleElectricalSetupButton} HandleThermalSetup={handleThermalSetupButton}/>
                        <div className="buttons-container">
                            <Button text="Run PowerSynth" className="buttons-full" onClick={handleRunPowerSynth}/>
                        </div>
                    </Card>

                }
                {isSolutionBroswerOpen &&
                    <SolutionsBrowser resultImage={imageFiles}/>

                }
                {/* Section for the Popups for Electrical setup and Thermal Setup, need to be implented */}
                {isElectricalSetupOpen &&
                    <Card className="popup-card">
                        <div className="popup-title">
                            <p>Electrical Setup</p>
                        </div>
                        <div className="popup-content">
                            <p className="popup-container-text">
                                Electrical Setup component will be routed here
                            </p>
                        </div>
                        <div className="buttons-container">
                            <Button text="Continue" onClick={handleElectricalSetupButton}/>
                        </div>
                    </Card>
                }
                {isThermalSetupOpen &&
                    <Card className="popup-card">
                        <div className="popup-title">
                            <p>Thermal Setup</p>
                        </div>
                        <div className="popup-content">
                                <ThermalSetupWindow />
                        </div>
                        <div className="buttons-container">
                            <Button text="Continue" onClick={handleThermalSetupButton}/>
                        </div>
                    </Card>
                }
            </div>
        </Overlay>
    )
};
export default OptimizationSetupPopup
