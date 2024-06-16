import logoImage from "../../assets/logo.png";
import { Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import React, { useState } from "react";
import Maps from "@/Components/Maps";

export default function Welcome({ layanans, nama }: any) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [mapsOpen, setMapsOpen] = React.useState(false);
    const [selectedLayanan, setSelectedLayanan] = React.useState<any>([{}]);

    const handleModal = (id: number) => {
        setModalOpen(true);

        const filterLayanan = layanans?.filter(
            (layanan: PageProps) => layanan.id === id
        );
        setSelectedLayanan(filterLayanan);
    };

    return (
        <div className="flex flex-col gap-20 h-screen bg-white">
            <span className="h-36 w-full bg-primary rounded-b-badge shadow-lg flex items-start justify-center text-white relative">
                <h1 className="text-2xl font-extrabold mt-5">{nama}</h1>

                <Link
                    className="px-1 text-white flex items-center justify-center rounded-full hover:bg-blue-300 absolute top-1 left-2"
                    href="/dashboard"
                >
                    <i className="bx bx-left-arrow-alt font-bold text-2xl"></i>
                </Link>

                <div className="h-32 w-32 bg-white rounded-full absolute -bottom-16  outline-8">
                    <img src={logoImage} alt="Logo" />
                </div>
            </span>

            <span className="px-10">
                <p className="font-semibold text-black">Layanan: </p>
                <span className="flex flex-col gap-5 text-center pt-5">
                    {layanans.map((layanan: any) => (
                        <label
                            key={layanan.id}
                            className="bg-primary opacity-80 hover:bg-primary hover:opacity-100 border-none py-2 flex items-center justify-center rounded-xl gap-2 btn text-white"
                            onClick={() => handleModal(layanan.id)}
                            htmlFor="my_modal_7"
                        >
                            <i className={`${layanan.icon} text-2xl`}></i>
                            {layanan.nama}
                        </label>
                    ))}
                    <label
                        className="border py-2 flex gap-2 items-center justify-center rounded-xl bg-green-500 hover:bg-green-700 text-white"
                        onClick={() => setMapsOpen(true)}
                        htmlFor="my_modal_8"
                    >
                        <i className="bx bxs-map-alt text-2xl"></i>
                        Lihat Lokasi
                    </label>
                </span>
            </span>

            {modalOpen && selectedLayanan.length > 0 && (
                <div>
                    <input
                        type="checkbox"
                        id="my_modal_7"
                        className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-white text-black">
                            <span className="flex gap-2 items-center justify-center">
                                <i
                                    className={`${selectedLayanan[0].icon} text-3xl text-primary`}
                                ></i>
                                <h3 className="text-2xl font-bold">
                                    {selectedLayanan[0].name}
                                </h3>
                            </span>
                            <p className="py-4 text-center">
                                {selectedLayanan[0].deskripsi}
                            </p>
                            <div className="flex flex-col gap-2 mt-5">
                                <span className="flex justify-between items-center text-sm">
                                    <p className="font-bold">Biaya</p>
                                    <span className="bg-primary py-1 rounded-lg text-white w-28 text-center">
                                        {+selectedLayanan[0].harga}
                                    </span>
                                </span>
                                <span className="flex justify-between items-center text-sm">
                                    <p className="font-bold">Pengerjaan</p>
                                    <span className="bg-primary py-1 rounded-lg text-center text-white w-28">
                                        {selectedLayanan[0].durasi}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <label
                            className="modal-backdrop"
                            htmlFor="my_modal_7"
                        />
                    </div>
                </div>
            )}

            {mapsOpen && (
                <div>
                    <input
                        type="checkbox"
                        id="my_modal_8"
                        className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-transparent w-full">
                            <Maps />
                        </div>
                        <label
                            className="modal-backdrop"
                            htmlFor="my_modal_8"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
