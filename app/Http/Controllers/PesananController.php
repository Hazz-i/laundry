<?php

namespace App\Http\Controllers;

use App\Models\pesanan;
use App\Http\Requests\StorepesananRequest;
use App\Http\Requests\UpdatepesananRequest;

class PesananController extends Controller
{
    /**
     * Display a listing of the resource.
     */ 
    public function index()
    {
        return inertia('Aktivitas', [
            'pesanan' => pesanan::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Input', [
            'pesanan' => pesanan::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorepesananRequest $request)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(pesanan $pesanan)
    {
        //
    }
}
