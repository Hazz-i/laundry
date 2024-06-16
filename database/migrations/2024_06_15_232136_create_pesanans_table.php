<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pesanans', function (Blueprint $table) {
            $table->id();
            $table->foreignId("laundry_id")->constrained("laundries")->onDelete("cascade");
            $table->foreignId("layanan_id")->constrained("layanans")->onDelete("cascade");
            $table->foreignId("user_id")->constrained("users")->onDelete("cascade");
            $table->string("nama_pemesan");
            $table->string("barang");
            $table->integer("jumlah_barang");
            $table->float("total_harga");
            $table->date("tanggal_pesan");
            $table->date("tanggal_selesai");
            $table->string("catatan")->nullable();
            $table->string("bukti_bayar")->nullable();
            $table->enum("status_pengantaran", ["pending", "proses", "berhasil"])->default("pending");
            $table->enum("status_pemesanan", ["pending", "proses", "berhasil", "dibatalkan"])->default("pending");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesanans');
    }
};
