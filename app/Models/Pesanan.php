<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "laundry_id",
        "layanan_id",
        "nama_pemesan",  
        "nomor_hp",  
        "barang",
        "jumlah_barang",
        "total_harga" ,
        "tanggal_pesan" ,
        "tanggal_selesai" ,
        "bukti_bayar" ,
        "status_pemesanan" ,
    ];  

    protected $hidden = [
        'laundry_id',
        'layanan_id',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function laundry(){
        return $this->belongsTo(Laundry::class);
    }
    public function layanan(){
        return $this->belongsTo(Layanan::class);
    }
}
