import { useState, PropsWithChildren, ReactNode } from "react";
import NavLink from "@/Components/NavLink";
import { User } from "@/types";

const menuList = [
    {
        title: "Home",
        icon: "bx bx-home",
        href: "dashboard",
    },
    {
        title: "Aktivitas",
        icon: "bx bx-list-ul",
        href: "aktivitas",
    },
    {
        title: "Profil",
        icon: "bx bx-user",
        href: "profile.edit",
    },
];

export default function Authenticated({
    children,
}: PropsWithChildren<{ user: User }>) {
    return (
        <div className="min-h-screen bg-gray-100">
            <main>{children}</main>

            <nav className="position fixed w-full bg-white bottom-0 flex gap-10 justify-center items-center pb-2 pt-0.5 text-slate-700 rounded-t-badge">
                {menuList.map((menu) => (
                    <NavLink
                        active={route().current(menu.href)}
                        href={route(menu.href)}
                        key={menu.title}
                        className={`flex flex-col items-center justify-center hover:text-primary transition duration-300 ease-in-out`}
                    >
                        <i className={menu.icon + " text-2xl"}></i>
                        <span className="text-xs">{menu.title}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
