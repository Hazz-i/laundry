import logoImage from "../../assets/logo.png";
import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";

const listLayanan = [
    {
        id: 1,
        name: "Reguler",
        icon: "bx bx-group",
        description:
            "Dalam perjalanan rutin Anda, nikmati pengalaman laundry yang tanpa repot dengan layanan reguler kami. Dengan harga yang terjangkau, tim profesional kami memberikan perhatian telaten untuk setiap helai pakaian Anda. Di sini, kami tidak hanya mencuci, tetapi juga merawat pakaian Anda agar tetap tahan lama dan nyaman dipakai setiap hari.",
        biaya: "Rp 10.000/kg",
        pengerjaan: "2 Hari",
    },
    {
        id: 2,
        name: "VIP",
        icon: "bx bxs-bookmark-star",
        description:
            "Jadikan setiap pakaian Anda layaknya bintang dengan layanan VIP kami. Dari pemilihan deterjen khusus hingga perawatan penuh perhatian dari tim ahli kami, setiap detail diurus untuk menciptakan hasil yang istimewa. Ini bukan sekadar mencuci pakaian; ini adalah pengalaman perawatan pribadi untuk pakaian Anda yang membutuhkan sentuhan eksklusif dan perhatian khusus.",
        biaya: "Rp 25.000/kg",
        pengerjaan: "2 Hari",
    },
    {
        id: 3,
        name: "Express",
        icon: "bx bx-rocket",
        description:
            "Ketika waktu adalah segalanya, pilih layanan express kami untuk menghadirkan pakaian bersih dalam sekejap. Tanpa mengorbankan kualitas, layanan ini memprioritaskan kecepatan tanpa meninggalkan jejak kenyamanan. Dengan deterjen terbaik dan proses cuci yang efisien, pakaian Anda siap dipakai ketika Anda membutuhkannya.",
        biaya: "Rp 12.000/kg",
        pengerjaan: "1 Hari",
    },
    {
        id: 4,
        name: "Sepatu",
        icon: "bx bx-group",
        description:
            "Kami tidak hanya merawat pakaian, tapi juga sepatu Anda. Dengan layanan khusus untuk sepatu, kami mengembalikan kilau asli dan kebersihan sepatu favorit Anda. Dari sepatu kasual hingga sepatu formal, percayakan kepada kami untuk menjaga penampilan sepatu Anda tetap prima.",
        biaya: "Rp 20.000",
        pengerjaan: "3 Hari",
    },
];

export default function Welcome({}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
}>) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLayanan, setSelectedLayanan] = useState<any>([{}]);

    const handleModal = (id: number) => {
        setModalOpen(true);

        const filterLayanan = listLayanan.filter(
            (layanan) => layanan.id === id
        );
        setSelectedLayanan(filterLayanan);
    };

    return (
        <div className="flex flex-col gap-20 h-screen bg-white">
            <span className="h-32 w-full bg-primary rounded-b-3xl shadow-lg flex items-start justify-center text-white relative">
                <h1 className="text-2xl font-extrabold mt-5">Shifa Laundry</h1>

                <button
                    className="px-1 text-white flex items-center justify-center rounded-full hover:bg-blue-300 absolute top-1 left-2"
                    onClick={() =>
                        window.history
                            ? window.history.back()
                            : window.location.replace("/")
                    }
                >
                    <i className="bx bx-left-arrow-alt font-bold text-2xl"></i>
                </button>

                <div className="h-32 w-32 bg-white rounded-full absolute -bottom-16  outline-8">
                    <img src={logoImage} alt="Logo" />
                </div>
            </span>

            <span className="px-10">
                <p className="font-semibold text-black">Layanan: </p>
                <span className="flex flex-col gap-5 text-center pt-5">
                    {listLayanan.map((layanan) => (
                        <label
                            key={layanan.id}
                            className="bg-primary opacity-80 hover:bg-primary hover:opacity-100 border-none py-2 flex items-center justify-center rounded-xl gap-2 btn text-white"
                            onClick={() => handleModal(layanan.id)}
                            htmlFor="my_modal_7"
                        >
                            <i className={`${layanan.icon} text-2xl`}></i>
                            {layanan.name}
                        </label>
                    ))}
                    <PrimaryButton className="border py-2 justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-700">
                        <i className="bx bxs-map-alt text-2xl"></i>
                        Lihat Lokasi
                    </PrimaryButton>
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
                                {selectedLayanan[0].description}
                            </p>
                            <div className="flex flex-col gap-2 mt-5">
                                <span className="flex justify-between items-center text-sm">
                                    <p className="font-bold">Biaya</p>
                                    <span className="bg-primary py-1 rounded-lg text-white w-28 text-center">
                                        {selectedLayanan[0].biaya}
                                    </span>
                                </span>
                                <span className="flex justify-between items-center text-sm">
                                    <p className="font-bold">Pengerjaan</p>
                                    <span className="bg-primary py-1 rounded-lg text-center text-white w-28">
                                        {selectedLayanan[0].pengerjaan}
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
        </div>
    );
}
