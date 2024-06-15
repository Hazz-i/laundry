import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Laundry from "../../assets/laundry.png";
import Header from "@/Components/Header";
import UserLocation from "@/Components/UserLocation";
import Welcome from "./Home";

const listLaundry = [
    {
        id: 1,
        name: "Shifa Laundry",
        alamat: "Jalan Seturan, No.123, Seturan, kec. Seturan, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
        status: "open",
    },
];

export default function Dashboard({ auth }: PageProps) {
    const handleClick = (id: number) => {};

    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <Head title="Dashboard" />
            <header className="w-full px-5 py-1 bg-gray-300 text-slate-600 flex items-center justify-start gap-1">
                <i className="bx bx-current-location"></i>

                <small>
                    <UserLocation />
                </small>
            </header>
            <div className="carousel w-full h-32">
                <div className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                        className="w-full"
                    />
                </div>
            </div>

            <div className="py-2 flex items-center justify-start px-2 gap-2">
                <button className="text-sm py-1 px-4 rounded-badge text-primary font-bold border border-primary">
                    Laundry
                </button>
                <button className="text-sm py-1 px-4 rounded-badge text-primary font-bold border border-primary">
                    ----
                </button>
                <button className="text-sm py-1 px-4 rounded-badge text-primary font-bold border border-primary">
                    ----
                </button>
            </div>

            <div className="p-2">
                <div className="w-full mx-auto sm:px-6 lg:px-8 grid gap-1">
                    {/* CONTENT */}
                    {listLaundry.map((laundry) => (
                        <button
                            className="bg-secondary overflow-hidden shadow-sm rounded-lg flex items-center gap-2 px-2 py-3 text-black"
                            onClick={() => handleClick(laundry.id)}
                        >
                            <img src={Laundry} alt="" />
                            <span className="flex flex-col items-start gap-0.5">
                                <h1 className="font-semibold">
                                    {laundry.name}
                                </h1>
                                <p className="text-[0.7rem] text-left">
                                    {laundry.alamat}
                                </p>
                            </span>
                            <span className="rounded-badge px-3 py-0.5 bg-green-500 text-sm text-white">
                                {laundry.status}
                            </span>
                        </button>
                    ))}
                    {/* END CONTENT */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
