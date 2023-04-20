//-----------------------------------------
//Component to create file upload popup
//Used in 'WelcomePage.tsx'
//-----------------------------------------

import React, {useState} from 'react'
import FileUpload from "./FileUpload";
import FileList from "./FileList"
import '@blueprintjs/core/lib/css/blueprint.css';
import '../popup.css'

  const RunProject: React.FC<{}> = () => {
    const [files, setFiles] = useState<{ name: string }[]>([]);
    // console.log(files);

    //Remove file function
    const removeFile = (filename: any) => {
        setFiles(files.filter(file => file.name !== filename))
    }
	return (
        <div style={{width: '100%', height: '100%', alignItems: 'center', display:'flex', flexDirection:'column'}}>
            <FileUpload files={files} setFiles={setFiles} removeFiles={removeFile} />
            <FileList files={files} removeFiles={removeFile} />
        </div>
	);
};
export default RunProject
