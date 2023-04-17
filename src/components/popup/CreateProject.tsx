//-------------------------------------------------------------------------------
//Component to create popup when user clicks on 'Create Project' button on welcome page
//Used in 'WelcomePage.tsx'
//-------------------------------------------------------------------------------


import '@blueprintjs/core/lib/css/blueprint.css';
import './popup.css'
import {  Overlay, Classes, Button, Card } from "@blueprintjs/core";
import axios from "axios";

const CreateProject: React.FC<{popupIsOpen: any, closePopup: any}> = ({popupIsOpen, closePopup}) => {

    //Handle user clicking 'Edit Materials' button, should close popup and go to the MDKEditor
	const handleEditMaterials = () => {
		console.log("Edit Materials Pressed");
        //go to MDKEditor page

        //uncomment line below when implementing edit materials page functionality and delete this line
        //closePopup();

	};

    //Handle user clicking 'Defualt Materials' button, should route to initial structure and layout
	const handleDefaultMaterials = () => {
		console.log("Defualt Materials Pressed");
        //route initial structure and layout

	};

    return (
        <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={popupIsOpen}>
            <div className="popup-container">
                <Card className="popup-card">
                    <div className="popup-title">
                        <p>Edit Materials</p>
                    </div>
                    <div className="popup-container">
                        <p>Would you like to edit the materials list?<br></br>
                        If not, the default materials will be used.</p>
                    </div>
                    <div className="buttons-container">
                        <Button text="Edit Materials List" onClick={handleEditMaterials} />
                        <Button text="Use Default Materials" onClick={handleDefaultMaterials} />
                        <Button text="Cancel" className="cancel-button" onClick={closePopup} />
                    </div>
                </Card>
            </div>
        </Overlay>
    )
};
export default CreateProject
