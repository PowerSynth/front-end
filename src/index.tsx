import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import WelcomePage from "./components/WelcomePage";
import EditConstraints from "./components/EditConstraints";
import InitialStructureAndLayout from "./components/InitialStructureAndLayout";
import MDKEditor from "./components/MDKEditor";
import EditLayerStack from "./components/EditLayerStack";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root />,
			children: [
				{ index: true, element: <WelcomePage /> },
				{
					path: "initial-structure-and-layout",
					element: <InitialStructureAndLayout />,
				},
				{
					path: "edit-constraints",
					element: <EditConstraints isNewProj={1} />,
				},
				{ path: "edit-layer-stack", element: <EditLayerStack /> },
				{ path: "mdk-editor", element: <MDKEditor /> },
			],
		},
	],
	{ basename: "/~cap22" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
