import React from "react";
import { useState } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import './SolutionBrowser.css'
import {Button, Tabs, Tab, } from "@blueprintjs/core";



const LayoutVisualization: React.FC<{imageFiles: any}> = ({imageFiles}) => {


    //if (imageFiles.name != ""){

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
                    <Tabs animate={true}  vertical={false}>
                        {imageFiles&&
                            imageFiles.map((i: any) =>
                            <Tab id={i.name} key={i.name} title={i.name}  panel={
                                <div className="tab-content">
                                    <img src={i.url} style={{width: "70%"}}></img>
                                </div>
                            } />
                            )
                        }
                    </Tabs>
                </div>
            </div>
        </div>
	);
};

export default LayoutVisualization;
