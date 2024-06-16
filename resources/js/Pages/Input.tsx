import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Logo from "../../assets/logo.png";
import ThirdInput from "@/Components/ThirdInput";
import React, { useEffect } from "react";
import Qris from "../../assets/Qris.png";

const Input = ({ auth, laundries, layanans }: any) => {
    const [laundry, setLaundry] = React.useState(null);
    const [nama, setNama] = React.useState(null);
    const [nomor, setNomor] = React.useState(null);
    const [layanan, setLayanan] = React.useState(null);
    const [barang, setBarang] = React.useState<any>(null);
    const [jmlBarang, setJmlBarang] = React.useState<number>(0);

    const [title, setTitle] = React.useState("Barang / kg");
    const [pembayaran, setPembayaran] = React.useState<boolean>(false);
    const [hitungHarga, setHitungHarga] = React.useState<number>(0);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (barang !== null) {
            if (barang?.toLowerCase().startsWith("sepatu")) {
                setTitle("Sepatu / pasang");
            } else {
                setTitle("Barang / kg");
            }
        }
    }, [barang]);

    useEffect(() => {
        if (layanan !== null && layanan !== "") {
            setPembayaran(true);

            const filterLayanan = layanans.filter(
                (service: any) => service.id == layanan
            );

            filterLayanan !== undefined &&
                setHitungHarga(jmlBarang * filterLayanan[0].harga);
        }
    }, [layanan, jmlBarang]);

    const handleSubmit = (ev: any) => {};

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
                        pembayaran ? "mt-0 pb-20" : "mt-20"
                    }`}
                >
                    <span className="flex items-center justify-center w-full mb-10">
                        <div className="w-16 h-0.5 bg-slate-400 rounded-badge"></div>
                    </span>
                    <span className="flex items-center justify-center gap-2 px-5">
                        <i className="bx bx-map-pin text-xl"></i>
                        <select
                            className="select select-bordered w-full max-w-xs bg-white border-gray-500 border-opacity-20"
                            onChange={(ev: any) => setLaundry(ev.target.value)}
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

                    <span className="pt-10 grid gap-2 items-center px-5">
                        <ThirdInput
                            name="Nama"
                            type="text"
                            required
                            setValue={setNama}
                        />
                        <ThirdInput
                            name="Nomor Hp"
                            type="number"
                            required
                            setValue={setNomor}
                        />

                        <span className="flex gap-2 items-center justify-center">
                            <ThirdInput
                                name="Nama Barang"
                                type="text"
                                required
                                setValue={setBarang}
                            />
                            <ThirdInput
                                name={`${title}`}
                                type="number"
                                required
                                setValue={setJmlBarang}
                            />
                        </span>

                        <div className="py-3">
                            <select
                                className="select select-bordered w-full bg-white"
                                onChange={(ev: any) =>
                                    setLayanan(ev.target.value)
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
                                    required
                                    className="border rounded-md"
                                />

                                <small
                                    className={`font-bold ${
                                        jmlBarang == 0 ? "hidden" : "flex"
                                    }`}
                                >
                                    Harga :{" "}
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    }).format(hitungHarga)}
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
