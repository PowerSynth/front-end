//-------------------------------------------------------------------------------
//Component to create the Macro Script section of the Optimization Setup popup
//Used in 'OptimizationBody.tsx'
//-------------------------------------------------------------------------------

import { Tag, Checkbox } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import './OptimizationSetup.css'
import '../popup/popup.css'

const MacroScriptSection: React.FC<{}> = () => {

    return (
        <div className="option-body-item" id="macro-script">
            <div className="item-title">
                <p>Macro Script Setup:</p>
            </div>
            <div className="item-body">
                <p>Floor Plan: </p><Tag minimal={true} round={false}>5</Tag>X<Tag minimal={true} round={false}>5</Tag>
                <p>Plot Solution: </p><Checkbox checked={true}></Checkbox>
            </div>
        </div>
    )
};
export default MacroScriptSection
