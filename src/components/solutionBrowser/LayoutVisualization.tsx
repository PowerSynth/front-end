import React from "react";
import { useState } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import './SolutionBrowser.css'
import {  Overlay, Classes, Button, Card, Tabs, Tab, Tag } from "@blueprintjs/core";
import LayoutOne from "./testImages/initial_layout_l1.png"


const LayoutVisualization: React.FC<{}> = () => {


	return (
        <div className="solutions-browser-item">
            <div className="solutions-browser-item-title">
                <p>Layout Visualization</p>
            </div>
            <div className="solutions-browser-item-body">
                <div className="visualization-header">
                    <Button text="View Initial Layout" />
                </div>
                <div className="visualization-body">
                    <Tabs animate={true} key={"vertical"} vertical={false}>
                        <Tab id="layer-1" title="Layer 1"  panel={
                            <div className="tab-content">
                                <img src={LayoutOne} style={{width: "70%"}}></img>
                            </div>
                        } />
                    </Tabs>
                </div>
            </div>
        </div>



	);
};

export default LayoutVisualization;
