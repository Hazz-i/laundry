import logoImage from "../../assets/logo.png";
import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";

const listLayanan = [
    {
        id: 1,
        name: "Reguler",
        icon: "bx bxs-group",
    },
    {
        id: 2,
        name: "VIP",
        icon: "bx bxs-group",
    },
    {
        id: 3,
        name: "Express",
        icon: "bx bxs-group",
    },
    {
        id: 4,
        name: "Spatu",
        icon: "bx bxs-group",
    },
];

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <div className="flex flex-col gap-20 h-screen">
            <span className="h-32 w-full bg-primary rounded-b-3xl shadow-lg flex items-start justify-center text-white relative">
                <h1 className="text-2xl font-extrabold mt-5">Shifa Laundry</h1>

                <button
                    className="px-1 border-white border text-white flex items-center justify-center rounded-full hover:bg-blue-300 absolute top-1 left-1"
                    onClick={() =>
                        window.history
                            ? window.history.back()
                            : window.location.replace("/")
                    }
                >
                    <i className="bx bx-left-arrow-alt font-bold text-xl"></i>
                </button>

                <div className="h-32 w-32 bg-white rounded-full absolute -bottom-16  outline-8">
                    <img src={logoImage} alt="Logo" />
                </div>
            </span>

            <span className="px-10">
                <p className="font-semibold">Layanan: </p>
                <span className="flex flex-col gap-5 text-center pt-5">
                    {listLayanan.map((layanan) => (
                        <PrimaryButton
                            key={layanan.id}
                            className="bg-primary opacity-50 hover:bg-primary hover:opacity-100 border py-2 flex items-center justify-center rounded-xl gap-5 "
                        >
                            <i className={`${layanan.icon} text-2xl`}></i>
                            {layanan.name}
                        </PrimaryButton>
                    ))}
                    <PrimaryButton className="border py-5 flex items-center justify-center rounded-xl bg-green-500 hover:bg-green-700">
                        <p className="font-bold">Lihat Lokasi</p>
                    </PrimaryButton>
                </span>
            </span>
        </div>
    );
}
