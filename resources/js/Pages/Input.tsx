import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Logo from "../../assets/logo.png";
import ThirdInput from "@/Components/ThirdInput";

const Input = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Input Laundry" />

            <main className="w-full text-black flex flex-col h-screen">
                <span className="flex gap-1 items-center justify-center text-2xl py-5 font-bold text-white bg-primary rounded-b-badge">
                    <img src={Logo} alt="" className="w-[5rem] h-[5rem]" />
                    <h1>Input Laundry</h1>
                </span>

                <div className="rounded-badge shadow-lg shadow-slate-600 bg-white mt-32 pt-1 grow">
                    <span className="flex items-center justify-center w-full mb-10">
                        <div className="w-16 h-0.5 bg-slate-400 rounded-badge"></div>
                    </span>
                    <span className="flex items-center justify-center gap-2">
                        <i className="bx bx-map-pin text-xl"></i>
                        <select className="select select-bordered w-full max-w-xs bg-white border-gray-500 border-opacity-20">
                            <option disabled selected>
                                Pilih Laundry
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </span>

                    <span className="pt-10 grid gap-2 items-center px-5">
                        <ThirdInput name="Nama" type="text" required />
                        <ThirdInput name="Nomor Hp" type="number" required />

                        <div className="py-3">
                            <select className="select select-bordered w-full bg-white">
                                <option disabled selected>
                                    Pilih paket
                                </option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>

                        <button className="btn bg-primary text-white border-none btn-sm w-full">
                            Tambah
                        </button>
                    </span>
                </div>
            </main>
        </AuthenticatedLayout>
    );
};

export default Input;
