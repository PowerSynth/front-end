//-------------------------------------------------------------------------------
//Component to create the Layout Genertion section of the Optimization Setup popup
//Used in 'OptimizationBody.tsx'
//-------------------------------------------------------------------------------

import { Tag } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import '../popup/popup.css'

const LayoutGenerationSection: React.FC<{}> = () => {

    return (
        <div className="option-body-item" id="layout-generation">
            <div className="item-title">
            <p>Layout Generation Setup:</p>
            </div>
            <div className="item-body">
                <p>Layout_Mode:</p><select style={{gridColumnStart: 3, gridColumnEnd: 5, height: "80%"}}><option>minimized-solutions</option><option>variable-solutions</option><option>fixed-solutions</option></select>
                <p>Number of Layouts/Generation:</p><Tag minimal={true} round={false} style={{gridColumnStart: 3, gridColumnEnd: 5}}>1</Tag>
                <p>Seed:</p><Tag minimal={true} round={false} style={{gridColumnStart: 3, gridColumnEnd: 5}}>0</Tag>
                <p>Optimization Algorithm:</p><select disabled={true} style={{gridColumnStart: 3, gridColumnEnd: 5, height: "80%",}}><option>NG-RANDOM</option></select>
            </div>
        </div>
    )
};
export default LayoutGenerationSection