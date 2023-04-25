import React from "react";
import { useState } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import './SolutionBrowser.css';
import '../popup/popup.css';
import {  Overlay, Classes, Button, Card, Tag } from "@blueprintjs/core";
import FileDownload from "js-file-download";
import axios from "axios";
import plot from "./testImages/plot_mode-0.png"

const LayoutSelection: React.FC<{}> = () => {
	const [isExitPopupOpen, setIsExitPopupOpen] = useState(false)
	const [isExportAllOpen, setIsExportAllOpen] = useState(false)


	const handleExit = () => {
        setIsExitPopupOpen(true)
	};
	const handlePopupExit = () => {
        window.open("/", "_self");
	};
	const handlePopupCancel = () => {
        setIsExitPopupOpen(false)
	};

    const handleExportAll = () => {
        axios.get("http://localhost:8080/download", {responseType: "blob"})
        .then((res: any) => {
            FileDownload(res.data, "download.png")
        })

    }


	return (
        <div className="solutions-browser-item">
            <div className="solutions-browser-item-title">
                <p>Layout Selection</p>
            </div>
            <div className="solutions-browser-item-body">
                <div className="solution-space">
                    <img src={plot} style={{width: "100%"}}></img>
                </div>
                <div className="solution-data">
                    <div className="solution-data-item">
                        Inductance:
                        <div style={{width: "100%"}}>
                            <Tag minimal={false} round={false} >14.281</Tag>nH
                        </div>
                    </div>
                    <div className="solution-data-item">
                        Max_Temperature:
                        <div style={{width: "100%"}}>
                            <Tag minimal={false} round={false} >513.609</Tag>K
                        </div>
                    </div>
                    <div className="solution-data-item">
                        Size:
                        <div style={{width: "100%"}}>
                            <Tag minimal={false} round={false} >42.2</Tag>X<Tag minimal={false} round={false} >39.4</Tag>
                        </div>
                    </div>
                </div>
                <div className="layout-buttons">
                    <Button text="Export Solution" />
                    <Button text="Export All Solutions" onClick={handleExportAll}/>
                    <Button text="Exit" onClick={handleExit}/>
                </div>
            </div>
            {isExitPopupOpen &&
                <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={isExitPopupOpen}>
                <div className="popup-container">
                    <Card className="popup-card">
                        <div className="popup-title">
                            <p>Exit</p>
                        </div>
                        <div className="popup-container">
                           Are you sure you want to exit?
                        </div>
                        <div className="buttons-container">
                            <Button className="welcome-page-button" text="Cancel" onClick={handlePopupCancel}/>
                            <Button className="welcome-page-button" text="Exit" onClick={handlePopupExit}/>
                        </div>
                    </Card>
                </div>
            </Overlay>

            }
        </div>
	);
};

export default LayoutSelection;
