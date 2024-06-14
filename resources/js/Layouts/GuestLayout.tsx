import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import logoImage from "../../assets/logo.png";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100 px-5">
            <div className="flex justify-center items-start gap-1">
                <h1 className="ms-10 font-bold text-3xl">Shifa Laundry</h1>

                <button
                    className="flex items-center justify-center rounded-full border border-black"
                    onClick={() => route("home")}
                >
                    <i className="bx bx-question-mark font-bold"></i>
                </button>
            </div>

            <div>
                <Link href="/home">
                    <img src={logoImage} alt="Logo" />
                </Link>
            </div>

            <div className="w-full">{children}</div>
        </div>
    );
}
