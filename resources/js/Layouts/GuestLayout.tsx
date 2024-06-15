import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import logoImage from "../../assets/logo.png";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100 px-5">
            <h1 className="font-bold text-3xl">My Laundry</h1>

            <div>
                <img src={logoImage} alt="Logo" />
            </div>

            <div className="w-full">{children}</div>
        </div>
    );
}
