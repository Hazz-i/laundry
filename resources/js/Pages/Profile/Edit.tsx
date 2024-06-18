import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import React from "react";
import Swal from "sweetalert2";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const [userName, setUserName] = React.useState<string>(auth.user.name);
    const [email, setEmail] = React.useState<string>(auth.user.email);
    const [phone, setPhone] = React.useState<string>(auth.user.number);

    const { setData, post, processing, errors } = useForm({
        name: userName,
        email: email,
        number: phone,
    });

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu akan logout dari akun ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(route("logout"), {
                    method: "POST",
                })
                    .then((response) => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "Kamu berhasil Log Out.",
                            icon: "success",
                        });

                        router.post(route("logout"));
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />

            {/* TOP CONTENT */}
            <div className="px-5 py-5 bg-white">
                <h1 className="text-xl font-bold text-black mb-5">
                    Profile Informasi
                </h1>
                <span className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3 text-black">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span>{auth.user.name.charAt(0)}</span>
                            </div>
                        </div>
                        <span className="flex flex-col -space-y-0.5">
                            <small className="font-semibold">
                                {auth.user.name}
                            </small>
                            <small>{auth.user.email}</small>
                            <small>{auth.user.number}</small>
                        </span>
                    </div>

                    <div className="flex gap-1">
                        <button
                            className="text-sm py-2 px-3 rounded-btn bg-primary font-bold border text-white flex items-center justify-center shadow-md"
                            onClick={() => {
                                const modal =
                                    document.getElementById("my_modal_2");
                                if (modal instanceof HTMLDialogElement) {
                                    modal.showModal();
                                }
                            }}
                        >
                            <i className="bx bx-pencil"></i>
                        </button>
                        <button
                            className="text-sm py-2 px-3 rounded-btn bg-red-500 font-bold border text-white flex items-center justify-center shadow-md"
                            onClick={handleLogout}
                        >
                            <i className="bx bxs-door-open"></i>
                        </button>
                    </div>
                </span>
            </div>
            {/* END TOP CONTENT */}

            {/* BODY */}
            <main className="py-1 grid ">
                <button
                    className="text-sm p-4 rounded-btn bg-white text-black flex items-start"
                    onClick={() => {
                        const modal = document.getElementById("my_modal_3");
                        if (modal instanceof HTMLDialogElement) {
                            modal.showModal();
                        }
                    }}
                >
                    Lupa password
                </button>
                <div
                    tabIndex={0}
                    className="collapse collapse-arrow  bg-white text-black rounded-none text-sm"
                >
                    <div className="collapse-title">Profile Informasi</div>
                    <div className="collapse-content">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text-alt text-black">
                                    Username
                                </span>
                            </div>
                            <input
                                type="text"
                                className={`input input-bordered input-sm w-full border-black border-opacity-20 bg-slate-100`}
                                value={auth.user.name}
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text-alt text-black">
                                    Email
                                </span>
                            </div>
                            <input
                                type="text"
                                className={`input input-bordered input-sm w-full border-black border-opacity-20 bg-slate-100`}
                                value={auth.user.email}
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text-alt text-black">
                                    Number
                                </span>
                            </div>
                            <input
                                type="text"
                                className={`input input-bordered input-sm w-full border-black border-opacity-20 bg-slate-100`}
                                value={auth.user.number}
                            />
                        </label>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="collapse collapse-arrow  bg-white text-black rounded-none text-sm"
                >
                    <div className="collapse-title">Tentang Aplikasi</div>
                    <div className="collapse-content">
                        <p>
                            Aplikasi ini marupakan aplikasi pemesanan laundry
                            yang sudah bekerjasama dengan beberapa mitra laundry
                            pada area Sleman.
                        </p>
                    </div>
                </div>
            </main>
            {/* END BODY */}

            {/* MODAL */}
            {/* UP DATA */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white text-black">
                    <h3 className="font-bold text-lg">Edit Data</h3>
                    <div className="modal-body grid mt-4 gap-2">
                        <span className="relative flex">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text-alt text-black">
                                        Username
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className={`input input-bordered input-sm w-full border-black border-opacity-20 ${
                                        userName.length > 0
                                            ? "bg-slate-100"
                                            : "bg-white"
                                    }`}
                                    value={userName}
                                    required
                                    onChange={(ev) => {
                                        setUserName(ev.target.value);
                                        setData("name", ev.target.value);
                                    }}
                                />
                            </label>
                        </span>
                        <span className="relative flex">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text-alt text-black">
                                        Email
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    className={`input input-bordered input-sm w-full border-black border-opacity-20 ${
                                        email.length > 0
                                            ? "bg-slate-100"
                                            : "bg-white"
                                    }`}
                                    value={email}
                                    required
                                    onChange={(ev) => {
                                        setEmail(ev.target.value);
                                        setData("email", ev.target.value);
                                    }}
                                />
                            </label>
                        </span>
                        <span className="relative flex">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text-alt text-black">
                                        Nomor
                                    </span>
                                </div>
                                <input
                                    type="number"
                                    className={`input input-bordered input-sm w-full border-black border-opacity-20 ${
                                        phone.length > 0
                                            ? "bg-slate-100"
                                            : "bg-white"
                                    }`}
                                    value={phone}
                                    required
                                    onChange={(ev) => {
                                        setPhone(ev.target.value);
                                        setData("number", ev.target.value);
                                    }}
                                />
                            </label>
                        </span>
                    </div>

                    <div className="modal-footer mt-4 flex items-center justify-end w-full">
                        <button
                            className="bg-primary text-white px-3 py-2 rounded-lg font-semibold text-sm"
                            onClick={() => {
                                const modal =
                                    document.getElementById("my_modal_2");
                                if (modal instanceof HTMLDialogElement) {
                                    modal.close();
                                }
                            }}
                        >
                            Simpan
                        </button>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            {/* END UP DATA */}

            {/*
             UP PASSWORD */}
            {/* END UP PASSWORD */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black">
                    <h3 className="font-bold text-lg">Lupa Password</h3>
                    <div className="modal-body grid mt-4 gap-2">
                        <span className="grid">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text-alt text-black">
                                        Password Baru
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className={`input input-bordered input-sm w-full border-black border-opacity-20 bg-white`}
                                    required
                                    onChange={(ev) => {
                                        setUserName(ev.target.value);
                                        setData("name", ev.target.value);
                                    }}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text-alt text-black">
                                        Konfirmasi Password Baru
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className={`input input-bordered input-sm w-full border-black border-opacity-20 bg-white`}
                                    required
                                    onChange={(ev) => {
                                        setUserName(ev.target.value);
                                        setData("name", ev.target.value);
                                    }}
                                />
                            </label>
                        </span>
                    </div>

                    <div className="modal-footer mt-4 flex items-center justify-end w-full">
                        <button
                            className="bg-primary text-white px-3 py-2 rounded-lg font-semibold text-sm"
                            onClick={() => {
                                const modal =
                                    document.getElementById("my_modal_2");
                                if (modal instanceof HTMLDialogElement) {
                                    modal.close();
                                }
                            }}
                        >
                            Simpan
                        </button>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            {/* END MODAL */}
        </AuthenticatedLayout>
    );
}
