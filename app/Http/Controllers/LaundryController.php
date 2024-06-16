<?php

namespace App\Http\Controllers;

use App\Models\laundry;
use App\Http\Requests\StorelaundryRequest;
use App\Http\Requests\UpdatelaundryRequest;

class LaundryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Dashboard', [
            'laundries' => laundry::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorelaundryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(laundry $laundry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(laundry $laundry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatelaundryRequest $request, laundry $laundry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(laundry $laundry)
    {
        //
    }
}
