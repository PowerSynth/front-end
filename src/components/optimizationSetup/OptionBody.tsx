//----------------------------------------------------------------------------------------
//Component used to combine components to create the body for the optimization setup popup
//Used in 'OptimizationSetup.tsx'
//----------------------------------------------------------------------------------------

import MacroScriptSection from "./MacroScriptSection";
import LayoutGenerationSection from "./LayoutGenerationSection";
import OptimizationButtonsSection from "./OptimizationButtonsSection";
import './OptimizationSetup.css'
import '@blueprintjs/core/lib/css/blueprint.css';
import '../popup/popup.css'

const OptimizationBody: React.FC<{OptionOne: any, OptionTwo: any, OptionThree: any, HandleElectricalSetup: any, HandleThermalSetup: any}> = ({OptionOne, OptionTwo, OptionThree, HandleElectricalSetup, HandleThermalSetup}) => {

    return (
        <div className="popup-container">
            {OptionOne &&
                <div className="option-body">
                    <MacroScriptSection />
                    <OptimizationButtonsSection HandleElectricalSetup={HandleElectricalSetup} HandleThermalSetup={HandleThermalSetup}/>
                </div>
            }
            {OptionTwo &&
                <div className="option-body">
                    <MacroScriptSection />
                    <LayoutGenerationSection />
                </div>
            }
            {OptionThree &&
                <div className="option-body">
                    <MacroScriptSection />
                    <LayoutGenerationSection />
                    <OptimizationButtonsSection HandleElectricalSetup={HandleElectricalSetup} HandleThermalSetup={HandleThermalSetup}/>
                </div>
            }
        </div>
    )
};
export default OptimizationBody