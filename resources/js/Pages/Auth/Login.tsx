import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="w-full">
                    <span className="relative flex">
                        <TextInput
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            className="block w-full pl-10 text-black"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="example@gmail.com"
                        />
                        <i className="bx bxs-envelope absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <span className="relative flex">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full pl-10 text-black"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Password"
                        />

                        <i className="bx bxs-lock absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-16">
                    <span className="flex gap-2 items-center justify-center">
                        <p className="font-bold text-xl">Masuk</p>
                        <button
                            className="px-1.5 py-0.5 bg-primary text-white flex items-center justify-center rounded-full hover:bg-blue-600"
                            type="submit"
                            disabled={processing}
                        >
                            <i className="bx bx-right-arrow-alt font-bold text-xl"></i>
                        </button>
                    </span>
                </div>
            </form>

            <div className="mt-16 text-center">
                <p className="text-sm">
                    Belum memiliki akun?{" "}
                    <Link
                        href={route("register")}
                        className="underline text-sm text-primary hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Daftar
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
