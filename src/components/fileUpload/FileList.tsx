//-------------------------------------------------------------------
//Component used to display a list of the files uploaded by users
//Used in 'RunProjectComponents.tsx'
//-------------------------------------------------------------------

import React from 'react'
import axios from 'axios';
import FileItem from './FileItem'
import "./FileList.css";

const FileList: React.FC<{files: any, removeFiles: any}> = ({files, removeFiles}) => {
    const deleteFileHandler = (_name: any) => {
        //axios.delete(`http://localhost:8080/upload?name=${_name}`, {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
        axios.post(`http://localhost:8080/delete`, {"name": _name}, {headers:{"Content-Type": "application/json"}})
        .then((res) => removeFiles(_name))
        .catch((err) => console.log(err))

        //Clearing the item from the form
        let form = (document.getElementById('file-upload-form') as HTMLInputElement)
        form.value = ""
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map((f: any) => <FileItem
                        key={f.name}
                        file={f}
                        deleteFile={deleteFileHandler}
                    />)
            }
        </ul>
    )
};
export default FileList
