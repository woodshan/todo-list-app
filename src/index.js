import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import TasksContextProvider from './Contexts/TasksContext';
import Tasks from "./Components/Tasks/Tasks"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Tasks />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "about/:name",
        element: <About />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <TasksContextProvider>
      <RouterProvider router={router}/>
    </TasksContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
