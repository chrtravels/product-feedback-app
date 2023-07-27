import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from './routes/root';
import ErrorPage from './error-page';
import NewFeedback from './pages/newFeedback';
import Roadmap from './pages/roadmap';
import FeedbackDetail from './pages/feedbackDetail';
import EditFeedback from './pages/editFeedback';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "new-feedback",
    element: <NewFeedback />
  },
  {
    path: "roadmap",
    element: <Roadmap />
  },
  {
    path: "feedback-detail",
    element: <FeedbackDetail />
  },
  {
    path: "edit-feedback",
    element: <EditFeedback />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
