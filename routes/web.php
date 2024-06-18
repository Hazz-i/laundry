<?php

use App\Http\Controllers\LaundryController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\ProfileController;
use App\Models\Layanan;
use App\Models\Pesanan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\Translation\PseudoLocalizationTranslator;

Route::redirect("/", "/login");

Route::middleware(['auth','verified'])->group(function () {
    Route::get('home/{name}', function($name) {
        return Inertia::render('Home', [
            'nama' => $name,
            'layanans' => Layanan::all()
        ]);
    })->name('home');

    Route::get('detail/{id}', function($id) {
        return Inertia::render('Detail', [
            'pesanan' => Pesanan::where('id', $id)->with(['user', 'layanan', 'laundry'])->first()
        ]);
    })->name('Detail');
    
    Route::resource('dashboard', LaundryController::class);
    Route::resource('input', PesananController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
