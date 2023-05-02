//-------------------------------------------------------------------------------
//Component to create a popup when user clicks on 'Run Project' button on welcome page
//Used in 'WelcomePage.tsx'
//-------------------------------------------------------------------------------

import React, { useState } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./popup.css";
import RunProjectComponents from "../fileUpload/RunProjectComponents";
import SolutionsBrowser from "../solutionBrowser/SolutionBrowser";
import { Overlay, Classes, Button, Card } from "@blueprintjs/core";
import axios from "axios";
import JSZip from "jszip";
import { response } from "express";

interface solutionImageData {
	name: string;
	url: string;
	blob: Blob;
	toDownload: boolean;
}

const RunProject: React.FC<{ popupIsOpen: any; closePopup: any }> = ({
	popupIsOpen,
	closePopup,
}) => {
	const [files, setFiles] = useState<{ name: any }[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [solutionsReceived, setSolutionsReceived] = useState(false);
	const [imageFiles, setImageFiles] = useState<{ name: any }[]>([]);

	//Remove file function
	const removeFile = (filename: any) => {
		setFiles(files.filter((file) => file.name !== filename));
	};

	//Handle user clicking 'Run' button -- to be implemented, needs to send data to backend and go to loading screen & then solutions page
	const handleRunProject = async () => {

		// Render loading screen variable
		setIsLoading(true);

		// Appending files to formData
		const formData = new FormData();
		files.forEach((file: any) => formData.append("file", file));
		console.log("sending files");

		try {
			const response = await axios.post(
				"https://peng-srv2.csce.uark.edu/ps2/api/power-synth",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
					responseType: "arraybuffer",
				}
			);

			console.log(response.data);
			const zip = new JSZip();
			const contents = await zip.loadAsync(response.data);
			console.log(contents.files);
			const solutionFiles = contents.files;
			const imageFiles = [];

			for (const [key, value] of Object.entries(solutionFiles)) {
				if (key.includes(".png") && !key.includes("MACOSX")) {
					const zipEntry = solutionFiles[key];
					const blob = await zipEntry.async("blob");

					const imageFileObject = new File([blob], zipEntry.name, {
						type: blob.type,
					});
					const imageFile = URL.createObjectURL(imageFileObject);

					const solutionImage: solutionImageData = {
						name: key.slice(13, key.length - 4),
						url: imageFile,
						blob,
						toDownload: false,
					};
					imageFiles.push(solutionImage);
				}
			}

			setIsLoading(false);
			setImageFiles(imageFiles);
			setSolutionsReceived(true);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	return (
		<div>
			{!solutionsReceived && (
				<Overlay
					className={Classes.OVERLAY_SCROLL_CONTAINER}
					isOpen={popupIsOpen}
				>
					<div className="popup-container">
						<Card className="popup-card">
							<div className="popup-title">
								<p>Run a Project</p>
							</div>
							<div className="popup-container">
								<RunProjectComponents
									files={files}
									setFiles={setFiles}
									removeFile={removeFile}
								/>
							</div>
							<div className="buttons-container">
								<Button text="Cancel" onClick={closePopup} />
								<Button
									className="welcome-page-button"
									text="Run"
									onClick={handleRunProject}
								/>
							</div>
						</Card>
					</div>
				</Overlay>
			)}
			{isLoading && (
				<Overlay
					className={Classes.OVERLAY_SCROLL_CONTAINER}
					isOpen={popupIsOpen}
				>
					<div
						style={{
							width: "100%",
							height: "100vh",
							backgroundColor: "lightgray",
						}}
					>
						<h1>Loading</h1>
					</div>
				</Overlay>
			)}
			{solutionsReceived && <SolutionsBrowser resultImage={imageFiles} />}
		</div>
	);
};
export default RunProject;
