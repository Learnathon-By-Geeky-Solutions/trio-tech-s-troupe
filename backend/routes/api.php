<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

// Public Route
Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware(['role:doctor'])->get('/doctor-dashboard', function () {
    return response()->json(['message' => 'Welcome to the Doctor Dashboard']);
});

Route::middleware(['role:patient'])->get('/patient-dashboard', function () {
    return response()->json(['message' => 'Welcome to the Patient Dashboard']);
});

Route::middleware('auth:api')->get('/me', [AuthController::class, 'me']);
