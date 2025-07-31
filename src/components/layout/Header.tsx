import type { FC } from "react";
import alienHeadImg from '../../assets/images/alien-head.png';
import ufoGif from '../../assets/images/ufo.gif';

export interface HeaderProps {
    className?: string,
}

export const Header: FC<HeaderProps> = () => {
    return (
        <header className="flex">
            {/* One */}
            <div className='order-3 p-1 flex justify-items-center items-center'>
                <span className='text-lime-400 justify-self-center text-lg font-extrabold'></span>
                <img src={alienHeadImg} alt="" className='w-8 h-8' />
            </div>
            {/* Two */}
            <div className="order-2 flex-1"></div>
            {/* Three */}
            <div className='order-1'>
                <nav className="p-1 flex justify-center space-x-1 text-lime-300 text-sm">
                    {["Home", "Projects"].map((label) => (
                    <a
                        key={label}
                        href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                        className="relative group wood-bg rounded-xs px-8 py-2 font-bold text-lg"
                    >
                        {label}
                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:block w-[40px] h-[40px]">
                        <img
                            src={ufoGif}
                            alt="UFO"
                            className="w-16 h-8 animate-float"
                        />
                        </span>
                    </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}