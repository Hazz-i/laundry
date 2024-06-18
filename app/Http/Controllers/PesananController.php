<?php

namespace App\Http\Controllers;

use App\Models\Laundry;
use App\Models\Layanan;
use App\Models\pesanan;
use App\Http\Requests\StorepesananRequest;
use App\Http\Requests\UpdatepesananRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PesananController extends Controller
{
    /**
     * Display a listing of the resource.
     */ 
    public function index()
    {
        return inertia('Aktivitas', [
            'pesanans' => pesanan::with(['user', 'layanan', 'laundry'])->orderBy('id', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Input', [
            'laundries' => Laundry::all(),
            'layanans' => Layanan::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorepesananRequest $request)
    {
        $data = $request->validated();

        if (empty($request->bukti_bayar)) {
            $data['bukti_bayar'] = null;
        }
    
        if($data){
            $layanan = Layanan::where('id', $data['layanan_id'])->get();

            if($layanan[0]->id == 1 || $layanan[0]->id == 2 ){
                $data['tanggal_selesai'] = Carbon::now()->addDays(2)->format('Y-m-d');
            }else if($layanan[0]->id == 3){
                $data['tanggal_selesai'] = Carbon::now()->addDays(1)->format('Y-m-d');
            }else{
                $data['tanggal_selesai'] = Carbon::now()->addDays(3)->format('Y-m-d');
            }

            $data['jumlah_barang'] = intval($data['jumlah_barang']);
            $data['tanggal_pesan'] = Carbon::now()->format('Y-m-d');
            
            if($data["bukti_bayar"] == null){
                $data["status_pemesanan"] = "pending";
            }else{
                $data["status_pemesanan"] = "proses";
            }

            Pesanan::create($data);

        }   
    }

    /**
     * Display the specified resource.
     */
    public function show(pesanan $pesanan)
    {
        return inertia('Aktivitas', [
            'pesanan' => pesanan::all()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(pesanan $pesanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatepesananRequest $request, pesanan $pesanan)
    {
        $data = $request->validated();
     
        dd($data);
        // dd($data);  
        // $pesanan->update($data);

        
        // return to_route('project.index')->with('success', __("Project \"{$project->name}\" was updated"));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        // $request->validate([
        //     'id' => ['required', 'current_password'],
        // ]);

        dd($id);
        // $pesanan = pesanan::where('id', $id)->first();
        // $pesanan->delete();


        // return redirect()::to('input.index');
    }
}
