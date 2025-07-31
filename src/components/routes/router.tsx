import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import App from "@/App";
import ProjectPage from "@/pages/Project";
import Resume from "@/pages/Resume";
import MyStoragePage from "@/pages/MyStorage";
import InventoryMailPage from "@/pages/InventoryMail";
import { ProjectsLayout } from "../layout/ProjectLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (<MainLayout ><App /></MainLayout>),
    },
    {
        path: "/projects",
        element: <ProjectsLayout />,
        children: [
            {
                index: true,
                element: <ProjectPage />,
            },
            {
                path: "mystorage",
                element: <MyStoragePage />
            },
            {
                path: "inventorymail",
                element: <InventoryMailPage />
            },
        ]

    },
    {
        path: "/resume",
        element: (<MainLayout><Resume /></MainLayout>)
    }
]);