//-------------------------------------------------------------------------------
//Component to create the buttons for Electrical and Thermal Setup of the Optimization Setup popup
//Used in 'OptimizationBody.tsx'
//-------------------------------------------------------------------------------

import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import '../popup/popup.css'

const OptimizationButtonsSection: React.FC<{HandleElectricalSetup: any, HandleThermalSetup: any}> = ({HandleElectricalSetup, HandleThermalSetup}) => {

    return (
        <div className="option-body-item" id="buttons">
            <div className="optimization-buttons-container">
                <Button text="Open Electrical Setup" className="optimization-button" onClick={HandleElectricalSetup}/>
                <Button text="Open Thermal Setup"  onClick={HandleThermalSetup}/>
            </div>
        </div>
    )
};
export default OptimizationButtonsSection