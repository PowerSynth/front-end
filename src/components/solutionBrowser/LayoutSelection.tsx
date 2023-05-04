import React from "react";
import { useState } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./SolutionBrowser.css";
import "../popup/popup.css";
import {
	Overlay,
	Classes,
	Button,
	Card,
	Tag,
	Checkbox,
} from "@blueprintjs/core";
import FileDownload from "js-file-download";
import { redirect, useNavigate } from "react-router-dom";

const LayoutSelection: React.FC<{ imageFiles: any }> = ({ imageFiles }) => {
	const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);
	const [isExportAllOpen, setIsExportAllOpen] = useState(false);
	const [itemsToDownload, setItemsToDownload] = useState<{ name: any }[]>([]);
	const nav = useNavigate();

	//Handle user opening exit popup
	const handleExit = () => {
		setIsExitPopupOpen(true);
	};

	//Handle user clicking exit
	const handlePopupExit = () => {
		setIsExitPopupOpen(false);
		nav("/");
	};

	//Handle cancelling the exit
	const handlePopupCancel = () => {
		setIsExitPopupOpen(false);
	};

	//Handle exporting all solutions
	const handleExportAll = () => {
		imageFiles.map((i: any) => {
			FileDownload(i.blob, `${i.name}.png`);
		});
	};

	//Handle exporting selected solutions
	const handleExportSelected = () => {
		itemsToDownload.map((i: any) => {
			FileDownload(i.blob, `${i.name}.png`);
		});
	};

	//Handle user clicking the checkbox in the list items
	const handleChecked = (i: any) => {
		if (!i.toDownload) {
			i.toDownload = true;
			setItemsToDownload((itemsToDownload: any) => [...itemsToDownload, i]);
		} else {
			i.toDownload = false;
			setItemsToDownload((itemsToDownload) => {
				return itemsToDownload.filter((item) => item !== i);
			});
		}
	};

	return (
		<div className="solutions-browser-item">
			<div className="solutions-browser-item-title">
				<p>Layout Selection</p>
			</div>
			<div className="solutions-browser-item-body">
				<div className="solution-space">
					<ul className="selection-list">
						{
							imageFiles &&
							imageFiles.map((i: any) => (
								<li className={"selection-list-item"} key={i.name}>
									<div className="selection-list-item-elements">{i.name}</div>
									<div className="selection-list-item-elements">
										<Checkbox
											className={"checkbox"}
											onChange={() => handleChecked(i)}
										/>
									</div>
								</li>
							))}
					</ul>
				</div>
				{/* <div className="solution-data">
                    <div className="solution-data-item">
                        Inductance:
                        <div style={{width: "100%"}}>
                            <Tag minimal={false} round={false} >14.281</Tag>nH
                        </div>
                    </div>
                    <div className="solution-data-item">
                        Max_Temperature:
                        <div style={{width: "100%"}}>
                            <Tag minimal={false} round={false} >513.609</Tag>K
                        </div>
                    </div>
                    <div className="solution-data-item">
                        Size:
                        <div style={{width: "100%"}}>
                            <Tag minimal={false} round={false} >42.2</Tag>X<Tag minimal={false} round={false} >39.4</Tag>
                        </div>
                    </div>
                </div> */}
				<div className="layout-buttons">
					<Button
						text="Export Selected Solution(s)"
						onClick={handleExportSelected}
					/>
					<Button text="Export All Solutions" onClick={handleExportAll} />
					<Button text="Exit" onClick={handleExit} />
				</div>
			</div>
			{
				isExitPopupOpen && (
					<Overlay
						className={Classes.OVERLAY_SCROLL_CONTAINER}
						isOpen={isExitPopupOpen}
					>
						<div className="popup-container">
							<Card className="popup-card">
								<div className="popup-title">
									<p>Exit</p>
								</div>
								<div className="popup-container">
									Are you sure you want to exit?
								</div>
								<div className="buttons-container">
									<Button
										className="welcome-page-button"
										text="Cancel"
										onClick={handlePopupCancel}
									/>
									<Button
										className="welcome-page-button"
										text="Exit"
										onClick={handlePopupExit}
									/>
								</div>
							</Card>
						</div>
					</Overlay>
				)
			}
		</div>
	);
};

export default LayoutSelection;
