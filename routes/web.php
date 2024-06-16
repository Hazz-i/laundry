<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LaundryController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\ProfileController;
use App\Models\Layanan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect("/", "/login");

Route::middleware(['auth','verified'])->group(function () {
    Route::get('home/{name}', function($name) {
        return Inertia::render('Home', [
            'nama' => $name,
            'layanans' => Layanan::all()
        ]);
    })->name('home');
    
    Route::resource('dashboard', LaundryController::class);
    Route::resource('input', PesananController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
