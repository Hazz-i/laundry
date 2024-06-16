import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Laundry from "../../assets/laundry.png";
import Header from "@/Components/Header";
import React from "react";

export default function Dashboard({ auth, laundries }: any) {
    const [cari, setCari] = React.useState("");

    const filteredLaundries = laundries?.filter((laundry: any) => {
        return laundry.nama.toLowerCase().includes(cari.toLowerCase());
    });

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="fixed w-full">
                <Header setCari={setCari} />
            </div>
            <Head title="Dashboard" />

            <div className="p-2">
                <div className="w-full mx-auto sm:px-6 lg:px-8 grid gap-3 mb-20 mt-16">
                    {/* CONTENT */}
                    {cari === "" &&
                        filteredLaundries?.length === 0 &&
                        laundries?.map((laundry: any) => (
                            <Link
                                href={`home/${laundry.nama}`}
                                className="bg-secondary overflow-hidden shadow-lg rounded-lg flex items-center gap-2 px-2 py-3 text-black"
                                key={laundry.id}
                            >
                                <img src={Laundry} alt="" />
                                <span className="flex flex-col items-start gap-0.5">
                                    <h1 className="font-semibold">
                                        {laundry.nama}
                                    </h1>
                                    <p className="text-[0.7rem] text-left">
                                        {laundry.alamat}
                                    </p>
                                </span>
                                <span className="rounded-badge px-3 py-0.5 bg-green-500 text-sm text-white">
                                    {laundry.id % 2 == 0 ? "Buka" : "Tutup"}
                                </span>
                            </Link>
                        ))}

                    {cari !== "" && filteredLaundries?.length === 0 ? (
                        <div className="flex justify-center items-center h-96">
                            <h1 className="text-2xl text-gray-500">
                                Laundry tidak ditemukan
                            </h1>
                        </div>
                    ) : (
                        filteredLaundries?.map((laundry: any) => (
                            <Link
                                href={`home/${laundry.nama}`}
                                className="bg-secondary shadow-lg rounded-lg flex items-center gap-2 px-2 py-3 text-black"
                                key={laundry.id}
                            >
                                <img src={Laundry} alt="" />
                                <span className="flex flex-col items-start gap-0.5">
                                    <h1 className="font-semibold">
                                        {laundry.nama}
                                    </h1>
                                    <p className="text-[0.7rem] text-left">
                                        {laundry.alamat}
                                    </p>
                                </span>
                                {laundry.id % 2 == 0 ? (
                                    <span className="rounded-badge px-3 py-0.5 bg-green-500 text-sm text-white">
                                        Buka
                                    </span>
                                ) : (
                                    <span className="rounded-badge px-3 py-0.5 bg-red-500 text-sm text-white">
                                        Tutup
                                    </span>
                                )}
                            </Link>
                        ))
                    )}
                    {/* END CONTENT */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
