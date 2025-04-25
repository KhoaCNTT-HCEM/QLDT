<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UserController;

// Đăng ký
Route::middleware('guest')->group(function () {
    Route::get('/register', [UserController::class, 'showRegistrationForm'])->name('register');
    Route::post('/register', [UserController::class, 'register']);

    // Đăng nhập
    Route::get('/login', [UserController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [UserController::class, 'login']);
});

// Đăng xuất (chỉ cho authenticated users)
Route::middleware('auth')->group(function () {
    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
});

// Route yêu cầu đăng nhập
// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');