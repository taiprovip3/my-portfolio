import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import App from "@/App";
import ProjectPage from "../pages/Project";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (<MainLayout ><App /></MainLayout>),
    },
    {
        path: "/projects",
        element: (<MainLayout ><ProjectPage /></MainLayout>),
    }
]);