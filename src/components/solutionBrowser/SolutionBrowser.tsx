import React from "react";
import { useState } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import './SolutionBrowser.css'
import {  Overlay, Classes,} from "@blueprintjs/core";
import LayoutVisualization from "./LayoutVisualization";
import LayoutSelection from "./LayoutSelection";


const SolutionsBrowser: React.FC<{resultImage: any}> = ({resultImage}) => {


	return (
        <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={true}>
            <div className="solutions-browser">
                <LayoutVisualization imageFiles={resultImage} />
                <LayoutSelection imageFiles={resultImage} />
            </div>
        </Overlay>
	);
};

export default SolutionsBrowser;
