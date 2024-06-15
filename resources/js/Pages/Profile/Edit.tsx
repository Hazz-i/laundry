import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import React from "react";
import SecondTextInput from "@/Components/SecondTextInput";
import Swal from "sweetalert2";
import { link } from "fs/promises";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const [userName, setUserName] = React.useState<string>(auth.user.name);
    const [email, setEmail] = React.useState<string>(auth.user.email);
    const [phone, setPhone] = React.useState<string>(auth.user.number);

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
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => {
                        // window.location.href = "/login";
                        console.log(response);
                        Swal.fire({
                            title: "Logged Out!",
                            text: "Kamu berhasil Log Out.",
                            icon: "success",
                        });
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
            <main className="pt-1 bg-white">
                <div className="px-5 py-3 bg-white flex items-center justify-between">
                    <h1 className=" text-black">Ubah Password</h1>
                    <i className="bx bx-chevron-right"></i>
                </div>
            </main>
            {/* END BODY */}

            {/* MODAL */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white text-black">
                    <h3 className="font-bold text-lg">Edit Data</h3>
                    <div className="modal-body grid mt-4 gap-2">
                        <span className="relative flex">
                            <SecondTextInput
                                id="name"
                                type="text"
                                name="name"
                                value={userName}
                                className="block w-full pl-10 rounded-lg border-primary"
                                autoComplete="name"
                                onChange={(e) => setUserName(e.target.value)}
                            />

                            <i className="bx bxs-user absolute text-xl top-1.5 left-3.5 text-primary"></i>
                        </span>
                        <span className="relative flex">
                            <SecondTextInput
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                className="block w-full pl-10 rounded-lg border-primary"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <i className="bx bxs-envelope absolute text-xl top-1.5 left-3.5 text-primary"></i>
                        </span>
                        <span className="relative flex">
                            <SecondTextInput
                                id="number"
                                type="number"
                                name="number"
                                value={phone}
                                className="block w-full pl-10 rounded-lg border-primary"
                                autoComplete="number"
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <i className="bx bxs-phone absolute text-xl top-1.5 left-3.5 text-primary"></i>
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
