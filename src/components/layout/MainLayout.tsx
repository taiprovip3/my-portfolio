import type { FC, PropsWithChildren } from "react";
import { Header } from "./Header";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col my-gradient min-h-lvh">
            <Header />
            {children}
        </div>
    );
}