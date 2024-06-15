import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Laundry from "../../assets/laundry.png";
import Header from "@/Components/Header";
import UserLocation from "@/Components/UserLocation";

export default function Dashboard({ auth }: PageProps) {
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
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-secondary overflow-hidden shadow-sm rounded-lg flex items-center justify-center gap-2 px-2 text-black">
                        <img src={Laundry} alt="" width={200} height={150} />
                        <span className="flex flex-col gap-1">
                            <h1>Shifa Laundry</h1>
                            <p className="text-[0.7rem]">
                                Jalan Seturan, No.123, Seturan, kec Seturan,
                                Kabupaten Sleman, Daerah Istimewa Yogyakarta{" "}
                            </p>
                            <small>Jarak: 700m</small>
                        </span>
                        <button className="rounded-badge px-3 py-0.5 bg-green-500 text-sm text-white">
                            Open
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
