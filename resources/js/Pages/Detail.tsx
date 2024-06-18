import NavLink from "@/Components/NavLink";
import logoImage from "../../assets/logo.png";
import React from "react";
import moment from "moment";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Detail({ pesanan }: any) {
    const { data, setData, errors, post, reset } = useForm({
        status_pemesanan: "",
        _method: "PUT",
    });

    const handleUpdate = (e: any) => {
        e.preventDefault();

        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu sudah membayar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Berhasil diperbarui!",
                    text: "data mu sudah diperbarui.",
                    icon: "success",
                });
                setData("status_pemesanan", "proses");
                post(route("input.update", pesanan.id));
                reset();
            }
        });

        // const {
        //     data,
        //     setData,
        //     delete: destroy,
        //     processing,
        //     reset,
        //     errors,
        // } = useForm({
        //     password: '',
        // });

        // const confirmUserDeletion = () => {
        //     setConfirmingUserDeletion(true);
        // };

        // const deleteUser = (e) => {
        //     e.preventDefault();

        //     destroy(route('profile.destroy'), {
        //         preserveScroll: true,
        //         onSuccess: () => closeModal(),
        //         onError: () => passwordInput.current.focus(),
        //         onFinish: () => reset(),
        //     });
        // };

        // const closeModal = () => {
        //     setConfirmingUserDeletion(false);

        //     reset();
        // };
    };
    return (
        <div className="flex flex-col gap-20 h-screen bg-white">
            <span className="h-36 w-full bg-primary rounded-b-badge shadow-lg flex items-start justify-center text-white relative">
                <h1 className="text-2xl font-extrabold mt-5">Detail Pesanan</h1>

                <NavLink
                    active={route().current("input.index")}
                    className="px-1 text-white flex items-center justify-center rounded-full hover:bg-blue-300 absolute top-1 left-2"
                    href={route("input.index")}
                >
                    <i className="bx bx-left-arrow-alt font-bold text-2xl"></i>
                </NavLink>

                <div className="h-32 w-32 bg-white rounded-full absolute -bottom-16  outline-8">
                    <img src={logoImage} alt="Logo" />
                </div>
            </span>

            <span className="px-10">
                {/* TOP CONTENT */}
                <p className="font-semibold text-black flex gap-3">
                    {pesanan.laundry.nama} -
                    <span className="flex items-center justify-start gap-1">
                        <i className={`${pesanan.layanan.icon}`}></i>
                        <h1>{pesanan.layanan.nama}</h1>
                    </span>
                </p>
                <span className="flex flex-col justify-center items-start gap-2 pt-2 text-black">
                    <span className="grid w-full">
                        <div className="grid">
                            <span className="flex items-center justify-between">
                                <small>Masuk: {pesanan.tanggal_pesan}</small>
                                <small>
                                    {pesanan.status_pemesanan === "pending" ? (
                                        <small className="text-red-500">
                                            -
                                        </small>
                                    ) : (
                                        <>
                                            Selesai dalam -{" "}
                                            {moment(
                                                pesanan.tanggal_selesai
                                            ).diff(
                                                moment(pesanan.tanggal_pesan),
                                                "days"
                                            )}{" "}
                                            hari
                                        </>
                                    )}
                                </small>
                            </span>
                            <span className="grid">
                                <small>
                                    Berat : {pesanan.jumlah_barang} kg
                                </small>
                                <small className="font-bold">
                                    Harga :{" "}
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    }).format(+pesanan.total_harga)}
                                </small>
                            </span>
                            <span className="grid gap-1 mt-5">
                                <button
                                    className={`btn btn-xs bg-green-500 border-none text-white ${
                                        pesanan.status_pemesanan === "pending"
                                            ? "bg-yellow-500"
                                            : "bg-green-500"
                                    }`}
                                >
                                    {pesanan.status_pemesanan === "pending"
                                        ? "Belum dibayar"
                                        : "Lunas"}
                                </button>
                                <button
                                    className={`btn btn-xs bg-red-500 border-none text-white`}
                                    onClick={() =>
                                        route("input.destroy", {
                                            id: pesanan.id,
                                        })
                                    }
                                >
                                    Batalkan Pesanan
                                </button>
                            </span>
                        </div>
                        <h1 className="text-xs font-semibold text-black mt-2">
                            *Jika pesanan blm di bayar, maka akan di pending.
                        </h1>
                    </span>
                </span>
                {/* END TOP CONTENT */}

                {/* BOTTOM CONTENT */}
                <div className="grid mt-16">
                    <h1 className="font-semibold text-black flex gap-3">
                        Progress
                    </h1>
                    <ul className="steps steps-horizontal">
                        <li
                            className={`step ${
                                pesanan.status_pemesanan == "pending"
                                    ? "step-warning"
                                    : "step-neutral"
                            } ${
                                pesanan.status_pemesanan == "proses"
                                    ? "step-primary"
                                    : "step-neutral"
                            }`}
                        >
                            <p className="text-black">Pending</p>
                        </li>
                        <li
                            className={`step ${
                                pesanan.status_pemesanan == "proses"
                                    ? "step-primary"
                                    : "step-neutral"
                            } ${
                                moment(pesanan.tanggal_selesai).diff(
                                    moment(pesanan.tanggal_pesan),
                                    "days"
                                ) == 0
                                    ? "step-primary"
                                    : "step-neutral"
                            }`}
                        >
                            <p className="text-black">Proses</p>
                        </li>
                        <li
                            className={`step ${
                                moment(pesanan.tanggal_selesai).diff(
                                    moment(pesanan.tanggal_pesan),
                                    "days"
                                ) == 0
                                    ? "step-primary"
                                    : "step-neutral"
                            }`}
                        >
                            <p className="text-black">Berhasil</p>
                        </li>
                    </ul>

                    {pesanan.status_pemesanan === "pending" && (
                        <button
                            className={`btn btn-xs bg-primary border-none text-white mt-5`}
                            onClick={handleUpdate}
                        >
                            Bayar
                        </button>
                    )}
                </div>
                {/* END BOTTOM CONTENT */}
            </span>
        </div>
    );
}
