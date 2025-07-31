import { createBrowserRouter, Outlet } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import App from "@/App";
import ProjectPage from "@/pages/Project";
import Resume from "@/pages/Resume";
import MyStoragePage from "@/pages/MyStorage";
import InventoryMailPage from "@/pages/InventoryMail";

const ProjectsLayout = () => (
  <MainLayout>
    {/*
      ProjectPage sẽ hiển thị nội dung chính của /projects
      Outlet sẽ hiển thị các trang con như /projects/mystorage
    */}
    <Outlet />
  </MainLayout>
);

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