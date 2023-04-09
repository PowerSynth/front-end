import React from "react";
import "./InitialStructureAndLayout.css";

const InitialStructureAndLayout: React.FC = () => {
    const DropDownButton = () =>{
        document.getElementById("dropdown-content")?.classList.toggle("show-dropdown");
    };
    // TODO: Finish the dropdown button functionality and program it the React way instead of the default JavaScript way.

    return(
        <div className="InitialStructureAndLayout">
            <div className="top-row">
            <button>Get Settings.info File</button>
            </div>
            <div className="row">
                <div>Path to layer_stack</div>
                <input type="text" />
                <button>Open File</button>
            </div>
            <div className="row">
                <div>Path to layout_script</div>
                <input type="text" />
                <button>Open File</button>
            </div>
            <div className="row">
                <div>Path to Connectivity_script</div>
                <input type="text" />
                <button>Open File</button>
            </div>
            <div className="row">
                <div>Reliability Constraints</div>
                <div className="dropdown">
                    <button className="dropdown-button" onClick={DropDownButton}>no constraints ...</button>
                    <div className="dropdown-content" id="dropdown-content">
                        <div className="dropdown-element">Item 1</div>
                        <div className="dropdown-element">Item 2</div>
                        <div className="dropdown-element">Item 3</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div></div>
                <button>Create Layout</button>
            </div>
        </div>
    );
};

export default InitialStructureAndLayout;