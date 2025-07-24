import type { FC, PropsWithChildren } from "react";
import { Header } from "./Header";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col h-screen my-gradient">
            <Header />
            {children}
        </div>
    );
}