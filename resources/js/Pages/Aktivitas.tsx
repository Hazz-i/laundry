import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const shortList = [
    {
        id: 1,
        title: "All",
    },
    {
        id: 3,
        title: "Pending",
    },
    {
        id: 4,
        title: "Proses",
    },
    {
        id: 5,
        title: "Selesai",
    },
    {
        id: 6,
        title: "Batal",
    },
];

export default function Aktivitas({ auth, pesanans }: any) {
    console.log(pesanans);
    const [active, setActive] = React.useState<number>(1);
    const [filterPesanan, setFilterPesaann] = React.useState([]);

    const handleClick = (id: number) => {
        setActive(id);

        setFilterPesaann(
            pesanans.filter((item: any) => item.id == shortList[id - 1].title)
        );
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Aktivitas" />

            <div className="flex items-center justify-start gap-1 pt-2 ps-2 text-black">
                <i className="bx bx-calendar text-2xl"></i>
                <h1 className="text-xl font-bold">Aktivitas</h1>
            </div>
            <div className="p-2">
                <div className="w-full grid gap-3">
                    <div className="flex items-center justify-start gap-1">
                        {shortList.map((item) => (
                            <button
                                className={`btn btn-xs btn-outline ${
                                    active == item.id
                                        ? "text-white bg-primary"
                                        : "text-primary"
                                }`}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    <Link
                        className="bg-secondary overflow-hidden shadow-md rounded-lg flex flex-col justify-center items-start gap-2 px-3 py-4 text-black"
                        href=""
                    >
                        <span className="grid w-full">
                            <span className="flex items-center justify-start">
                                <i className="bx bx-group me-2"></i>
                                <h1>Reguler</h1>
                                <small className="ms-2 font-semibold">
                                    {"(Shifa Laundry)"}
                                </small>
                            </span>
                            <span className="flex items-center justify-between ">
                                <small>masuk: 12-10-2024</small>
                                <small>4 hari lagi</small>
                            </span>
                            <span className="flex items-center justify-between ">
                                <small>Berat: 500m</small>
                                <small>Rp. 24.000</small>
                            </span>
                        </span>

                        <span className="flex items-center justify-center gap-1">
                            <button className="btn btn-xs bg-primary border-none text-white">
                                Process
                            </button>
                            <button className="btn btn-xs bg-green-500 border-none text-white">
                                Dibayar
                            </button>
                        </span>
                    </Link>

                    <div className="bg-secondary overflow-hidden shadow-md rounded-lg flex flex-col justify-center items-start gap-2 px-3 py-4 text-black">
                        <span className="grid w-full">
                            <span className="flex items-center justify-start">
                                <i className="bx bx-group me-2"></i>
                                <h1 className="font-bold">Express</h1>
                                <small className="ms-2 font-semibold">
                                    {"(Shifa Laundry)"}
                                </small>
                            </span>
                            <span className="flex items-center justify-between ">
                                <small>masuk: 12-10-2024</small>
                                <small>4 hari lagi</small>
                            </span>
                            <span className="flex items-center justify-between ">
                                <small>Berat: 500m</small>
                                <small>Rp. 24.000</small>
                            </span>
                        </span>

                        <span className="flex items-center justify-center gap-1">
                            <button className="btn btn-xs bg-yellow-500 border-none text-white">
                                Pending
                            </button>
                            <button className="btn btn-xs bg-red-500 border-none text-white">
                                Belum Dibayar
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
