import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import App from "./App.tsx";
import AddTodo from "./AddTodo.tsx";
import TheList from "./TheList.tsx";

import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route element={<TheList />} index />
            <Route element={<AddTodo />} path="addtodo" />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
