import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import moment from "moment";

const shortList = [
    {
        id: 1,
        title: "All",
    },
    {
        id: 2,
        title: "pending",
    },
    {
        id: 3,
        title: "proses",
    },
    {
        id: 4,
        title: "berhasil",
    },
    {
        id: 5,
        title: "dibatalkan",
    },
];

export default function Aktivitas({ auth, pesanans }: any) {
    const [active, setActive] = React.useState<number>(1);
    const [filterPesanan, setFilterPesaann] = React.useState(pesanans);
    const [hari, setHari] = React.useState();

    const handleClick = (id: number) => {
        setActive(id);

        id === 1
            ? setFilterPesaann(pesanans)
            : setFilterPesaann(
                  pesanans?.filter((pesanan: any) => {
                      pesanan.status_pemesanan === shortList[id - 1].title;
                  })
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
                <div className="w-full grid gap-3 mb-16">
                    <div className="flex items-center justify-start gap-1">
                        {shortList.map((item) => (
                            <button
                                className={`btn btn-xs btn-outline ${
                                    active == item.id
                                        ? "text-white bg-primary"
                                        : "text-primary"
                                }`}
                                onClick={() => handleClick(item.id)}
                                key={item.id}
                            >
                                {item.title.charAt(0).toUpperCase() +
                                    item.title.slice(1)}
                            </button>
                        ))}
                    </div>

                    {filterPesanan.length === 0 && (
                        <div className="flex items-center justify-center gap-2 p-4 text-black">
                            <h1 className="text-lg font-bold">
                                Tidak ada data
                            </h1>
                        </div>
                    )}
                    {filterPesanan?.map((pesanan: any) => (
                        <Link
                            className="bg-secondary overflow-hidden shadow-md rounded-lg flex flex-col justify-center items-start gap-2 px-3 py-4 text-black"
                            href={`detail/${pesanan.id}`}
                            key={pesanan.id}
                        >
                            <span className="grid w-full">
                                <span className="flex items-center justify-start">
                                    <i
                                        className={`${pesanan.layanan.icon} me-2`}
                                    ></i>
                                    <h1>{pesanan.layanan.nama}</h1>
                                    <small className="ms-2 font-semibold">
                                        {`( ${pesanan.laundry.nama} )`}
                                    </small>
                                </span>
                                <span className="flex items-center justify-between ">
                                    <small>
                                        masuk: {pesanan.tanggal_pesan}
                                    </small>
                                    <small>
                                        {moment(pesanan.tanggal_selesai).diff(
                                            moment(pesanan.tanggal_pesan),
                                            "days"
                                        )}{" "}
                                        hari lagi
                                    </small>
                                </span>
                                <span className="flex items-center justify-between ">
                                    <small>
                                        Berat: {pesanan.jumlah_barang} kg
                                    </small>
                                    <small className="font-bold">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }).format(+pesanan.total_harga)}
                                    </small>
                                </span>
                            </span>

                            <span className="flex items-center justify-center gap-1">
                                <button
                                    className={`btn btn-xs border-none text-white ${
                                        pesanan.status_pemesanan === "pending"
                                            ? "bg-yellow-500"
                                            : pesanan.status_pemesanan ===
                                              "proses"
                                            ? "bg-primary"
                                            : pesanan.status_pemesanan ===
                                              "selesai"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    }`}
                                >
                                    {pesanan.status_pemesanan}
                                </button>
                                <button
                                    className={`btn btn-xs bg-green-500 border-none text-white ${
                                        pesanan.status_pemesanan === "pending"
                                            ? "bg-red-500"
                                            : "bg-green-500"
                                    }`}
                                >
                                    {pesanan.status_pemesanan === "pending"
                                        ? "Belum dibayar"
                                        : "Lunas"}
                                </button>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
