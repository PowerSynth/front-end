//Component to determine if the popup window is visible
//Used in 'WelcomePage.tsx'

import React from "react";
import Modal from "./RunProjectPopup";

interface RunProjectPopupWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const RunProjectPopupWrapper: React.FC<RunProjectPopupWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }
    return (<Modal onBackdropClick={onBackdropClick} />);
}

export default RunProjectPopupWrapper
