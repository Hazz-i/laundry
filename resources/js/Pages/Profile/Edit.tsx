import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />
            <div className="bg-white flex items-center justify-start gap-3 px-5 py-10 text-black">
                <span className="w-16 h-16 bg-black  rounded-full"></span>
                <span className="flex flex-col">
                    <small>Wahid</small>
                    <small>user@gmail.com</small>
                    <small>08958000715580</small>
                </span>
            </div>
        </AuthenticatedLayout>
    );
}
