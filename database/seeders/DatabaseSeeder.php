<?php

namespace Database\Seeders;

use App\Models\Laundry;
use App\Models\Layanan;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'user',
            'email' => 'user@example.com',
            'number' => '0895800715580',
            'password' => '123',
        ]);

        // Layanan
        Layanan::factory()->create([
            'nama' => "Reguler",
            'icon' => 'bx bx-group',
            "deskripsi" => "Dalam perjalanan rutin Anda, nikmati pengalaman laundry yang tanpa repot dengan layanan reguler kami. Dengan harga yang terjangkau, tim profesional kami memberikan perhatian telaten untuk setiap helai pakaian Anda. Di sini, kami tidak hanya mencuci, tetapi juga merawat pakaian Anda agar tetap tahan lama dan nyaman dipakai setiap hari.",
            "harga" => 10000,
            "durasi" => "2 hari",
        ]);
        Layanan::factory()->create([
            'nama' => "VIP",
            'icon' => 'bx bxs-bookmark-star',
            "deskripsi" => "Jadikan setiap pakaian Anda layaknya bintang dengan layanan VIP kami. Dari pemilihan deterjen khusus hingga perawatan penuh perhatian dari tim ahli kami, setiap detail diurus untuk menciptakan hasil yang istimewa. Ini bukan sekadar mencuci pakaian; ini adalah pengalaman perawatan pribadi untuk pakaian Anda yang membutuhkan sentuhan eksklusif dan perhatian khusus.",
            "harga" => 25000,
            "durasi" => "2 hari",
        ]);
        Layanan::factory()->create([
            'nama' => "Express",
            'icon' => 'bx bx-rocket',
            "deskripsi" => "Ketika waktu adalah segalanya, pilih layanan express kami untuk menghadirkan pakaian bersih dalam sekejap. Tanpa mengorbankan kualitas, layanan ini memprioritaskan kecepatan tanpa meninggalkan jejak kenyamanan. Dengan deterjen terbaik dan proses cuci yang efisien, pakaian Anda siap dipakai ketika Anda membutuhkannya.",
            "harga" => 12000,
            "durasi" => "1 hari",
        ]);
        Layanan::factory()->create([
            'nama' => "Sepatu",
            'icon' => 'bx bx-group',
            "deskripsi" => "Kami tidak hanya merawat pakaian, tapi juga sepatu Anda. Dengan layanan khusus untuk sepatu, kami mengembalikan kilau asli dan kebersihan sepatu favorit Anda. Dari sepatu kasual hingga sepatu formal, percayakan kepada kami untuk menjaga penampilan sepatu Anda tetap prima.",
            "harga" => 20000,
            "durasi" => "3 hari",
        ]);

        // Laundry
        Laundry::factory()->create([
            'nama' => 'Shifa Laundry',
            'alamat' => 'Jalan Seturan, No.123, Seturan, kec. Seturan, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
        Laundry::factory()->create([
            'nama' => 'Laundry Gejayan',
            'alamat' => 'Jalan Angga Jaya, No.1, Condongcatur, kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
        Laundry::factory()->create([
            'nama' => 'Fix Laundry',
            'alamat' => 'Jalan Nusa Indah, No.162, Ngringin, kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
        Laundry::factory()->create([
            'nama' => 'Marine Laundry',
            'alamat' => 'Jalan Angga Jaya, No.289, Condongcatur, kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
        Laundry::factory()->create([
            'nama' => 'Ada Laundry',
            'alamat' => 'Jalan Barada, No.12H, Pringwulung, kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
        Laundry::factory()->create([
            'nama' => 'MOS Laundry',
            'alamat' => 'Jalan Manggis, No.79-35, Dagbag, kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
        Laundry::factory()->create([
            'nama' => 'Laundry Town',
            'alamat' => 'Jalan Manggis, Condongcatur, kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
        ]);
    }
}
