<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class StorepesananRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "user_id" => ["required", "integer"],
            "laundry_id" => ["required", "integer"],
            "layanan_id" => ["required", "integer"],
            "nama_pemesan" => ["required", "string"],
            "nomor_hp" => ["required", "string"],
            "barang" => ["required", "string"],
            "jumlah_barang" => ["required", "integer"],
            "total_harga" => ["required", "integer"],
            "bukti_bayar" => ["nullable", "string"],
        ];
    }
}
