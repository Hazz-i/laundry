import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        number: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="w-full">
                    <span className="relative flex">
                        <TextInput
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full pl-10"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="example@gmail.com"
                        />
                        <i className="bx bxs-envelope absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="w-full mt-4">
                    <span className="relative flex">
                        <TextInput
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full pl-10"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="username"
                        />
                        <i className="bx bxs-user absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <span className="relative flex">
                        <TextInput
                            id="number"
                            type="number"
                            name="number"
                            value={data.number}
                            className="block w-full pl-10"
                            autoComplete="number"
                            onChange={(e) => setData("number", e.target.value)}
                            placeholder="number"
                        />
                        <i className="bx bxs-phone absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError message={errors.number} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <span className="relative flex">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full pl-10"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="password"
                        />

                        <i className="bx bxs-lock absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <span className="relative flex">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full pl-10"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            placeholder="confirm password"
                        />

                        <i className="bx bxs-lock absolute text-xl top-1.5 left-3.5 text-primary"></i>
                    </span>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <span className="flex gap-2 items-center justify-center">
                        <p className="font-bold text-xl">Daftar</p>
                        <button className="px-1.5 py-0.5 bg-primary text-white flex items-center justify-center rounded-full hover:bg-blue-600">
                            <i className="bx bx-right-arrow-alt font-bold text-xl"></i>
                        </button>
                    </span>
                </div>
            </form>

            <div className="mt-16 text-center">
                <p className="text-sm">
                    Sudah memiliki akun?{" "}
                    <Link
                        href={route("login")}
                        className="underline text-sm text-primary hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Masuk
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
