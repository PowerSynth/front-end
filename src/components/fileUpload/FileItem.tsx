//--------------------------------------------------------------------
//Component used to create a file item to display in the file list
//Used in 'RunProjectComponents.tsx'
//--------------------------------------------------------------------

import React from 'react'
import "./FileList.css";

const FileItem: React.FC<{file: any, deleteFile: any}> = ({file, deleteFile}) => {
    return (
        <li className="list-item" key={file.name}>
                <div className="list-item-elements">
                    {file.name}
                </div>
                <div className="list-item-elements">
                    {file.isUploading &&
                        <p>...</p>
                    }
                    {!file.isUploading &&
                        <button className="delete-button" onClick={() => deleteFile(file.name)}>X</button>
                    }
                </div>
        </li>
    )
};
export default FileItem
