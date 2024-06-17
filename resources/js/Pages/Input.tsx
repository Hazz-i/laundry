import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Logo from "../../assets/logo.png";
import ThirdInput from "@/Components/ThirdInput";
import React, { FormEventHandler, useEffect } from "react";
import Qris from "../../assets/Qris.png";
import Swal from "sweetalert2";

const Input = ({ auth, laundries, layanans }: any) => {
    const [name, setName] = React.useState(auth.user.name);
    const [number, setNumber] = React.useState(auth.user.number);

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        laundry_id: 0,
        layanan_id: 0,
        nama_pemesan: name,
        nomor_hp: number,
        barang: "",
        jumlah_barang: 0,
        total_harga: 0,
        catatan: "",
        bukti_pembayaran: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu akan menambahkan laundry!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then((result) => {
            if (result.isConfirmed) {
                post(route("input.store"));
                reset();
            }
        });
    };

    const [title, setTitle] = React.useState("Barang / kg");
    const [pembayaran, setPembayaran] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (data.barang !== "") {
            if (data.barang.toLowerCase().startsWith("sepatu")) {
                setTitle("Sepatu / pasang");
            } else {
                setTitle("Barang / kg");
            }
        }
    }, [data.barang]);

    useEffect(() => {
        if (data.layanan_id !== null && data.layanan_id !== 0) {
            setPembayaran(true);

            const filterLayanan = layanans.filter(
                (service: any) => service.id == data.layanan_id
            );

            filterLayanan !== undefined &&
                setData(
                    "total_harga",
                    data.jumlah_barang * filterLayanan[0].harga
                );
        }
    }, [data.layanan_id, data.jumlah_barang]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Input Laundry" />

            <main className="w-full text-black flex flex-col h-screen">
                <span className="flex gap-1 items-center justify-center text-2xl py-5 font-bold text-white bg-primary rounded-b-badge">
                    <img src={Logo} alt="" className="w-[5rem] h-[5rem]" />
                    <h1>Laundry</h1>
                </span>

                {/* TAMBAH LAUNDRY */}
                <form
                    className={`rounded-badge shadow-lg shadow-slate-600 bg-white grow ${
                        pembayaran ? "mt-0 pb-20" : "mt-20 "
                    }`}
                    onSubmit={submit}
                >
                    <span className="flex items-center justify-center w-full mb-10">
                        <div className="w-16 h-0.5 bg-slate-400 rounded-badge"></div>
                    </span>
                    <span className="flex items-center justify-center gap-2 px-5">
                        <i className="bx bx-map-pin text-xl"></i>
                        <select
                            className="select select-bordered w-full max-w-xs bg-white border-black border-opacity-20"
                            onChange={(ev: any) =>
                                setData("laundry_id", parseInt(ev.target.value))
                            }
                        >
                            <option disabled selected>
                                Pilih Laundry
                            </option>
                            {laundries.map((laundry: any) => (
                                <option key={laundry.id} value={laundry.id}>
                                    {laundry.nama}
                                </option>
                            ))}
                        </select>
                    </span>

                    <span className=" grid gap-2 items-center px-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text-alt text-black">
                                    Nama
                                </span>
                            </div>
                            <input
                                type="text"
                                className={`input input-bordered input-sm w-full border-black border-opacity-20 ${
                                    name.length > 0
                                        ? "bg-slate-100"
                                        : "bg-white"
                                }`}
                                value={name}
                                required
                                onChange={(ev) => {
                                    setName(ev.target.value);
                                    setData("nama_pemesan", ev.target.value);
                                }}
                            />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text-alt text-black">
                                    Nomor Hp
                                </span>
                            </div>
                            <input
                                type="text"
                                className={`input input-bordered input-sm w-full border-black border-opacity-20 ${
                                    number.length > 0
                                        ? "bg-slate-100"
                                        : "bg-white"
                                }`}
                                value={number}
                                required
                                onChange={(ev) => {
                                    setNumber(ev.target.value);
                                    setData("nomor_hp", ev.target.value);
                                }}
                            />
                        </label>

                        <span className="flex gap-2 items-center justify-center">
                            <ThirdInput
                                name="Nama Barang"
                                type="text"
                                required
                                value={data.barang}
                                text="barang"
                                setValue={setData}
                            />
                            <ThirdInput
                                name={`${title}`}
                                type="number"
                                required
                                text="jumlah_barang"
                                setValue={setData}
                            />
                        </span>

                        <div className="py-3">
                            <select
                                className="select select-bordered w-full bg-white border-black border-opacity-20"
                                onChange={(ev: any) =>
                                    setData(
                                        "layanan_id",
                                        parseInt(ev.target.value)
                                    )
                                }
                            >
                                <option disabled selected>
                                    Pilih paket
                                </option>
                                {layanans.map((laundry: any) => (
                                    <option key={laundry.id} value={laundry.id}>
                                        {laundry.nama} -{" "}
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }).format(laundry.harga)}{" "}
                                        / {laundry.id === 4 ? "Pasang" : "Kg"}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {pembayaran && (
                            <div className="grid items-center justify-center gap-5 w-full">
                                <input
                                    name="pembayaran"
                                    type="file"
                                    className="border rounded-md"
                                />

                                <small
                                    className={`font-bold ${
                                        data.jumlah_barang == 0
                                            ? "hidden"
                                            : "flex"
                                    }`}
                                >
                                    Harga :{" "}
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    }).format(data.total_harga)}
                                </small>
                                <span className="grid items-center justify-center">
                                    <img src={Qris} alt="" />
                                </span>
                            </div>
                        )}

                        <button
                            className="btn bg-primary text-white border-none btn-sm w-full"
                            type="submit"
                        >
                            Tambah
                        </button>
                    </span>
                </form>
                {/* END TAMBAH LAUNDRY */}
            </main>
        </AuthenticatedLayout>
    );
};

export default Input;
