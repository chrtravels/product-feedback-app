import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from './routes/root';
import ErrorPage from './error-page';
import NewFeedback from './pages/newFeedback';
import Roadmap from './pages/roadmap';
import FeedbackDetail from './pages/feedbackDetail';
import EditFeedback from './pages/editFeedback';
import RequestContextLayout from './layouts/requestContextLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<ErrorPage />} />
      <Route path='/new-feedback' element={<NewFeedback />} />
      <Route path='/roadmap' element={<Roadmap />} />
      <Route path='/edit-feedback' element={<EditFeedback />} />
      <Route element={<RequestContextLayout />}>
        <Route path='feedback-detail' element={<FeedbackDetail />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
