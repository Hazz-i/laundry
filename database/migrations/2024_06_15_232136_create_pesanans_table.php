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
            $table->foreignId("user_id")->constrained("users")->onDelete("cascade");
            $table->foreignId("barang_id")->constrained("barangs")->onDelete("cascade");
            $table->date("tanggal_pesan");
            $table->date("tanggal_selesai");
            $table->string("catatan")->nullable();
            $table->string("bukti_bayar")->nullable();
            $table->integer("jumlah_pakaian");
            $table->enum("status_pengantaran", ["process", "success"])->default("process");
            $table->enum("status_pemesanan", ["pending", "process", "success", "cancel"])->default("pending");
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
