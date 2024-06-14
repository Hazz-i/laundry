import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Laundry from "../../assets/laundry.png";

export default function Aktivitas({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Aktivitas" />

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
                <div className="w-full grid gap-1">
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
