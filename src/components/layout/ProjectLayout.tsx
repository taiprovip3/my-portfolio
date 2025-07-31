import { Outlet } from "react-router-dom";
import { MainLayout } from "./MainLayout";

export const ProjectsLayout = () => (
  <MainLayout>
    {/*
      ProjectPage sẽ hiển thị nội dung chính của /projects
      Outlet sẽ hiển thị các trang con như /projects/mystorage
    */}
    <Outlet />
  </MainLayout>
);