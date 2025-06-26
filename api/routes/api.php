<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\AuthController;


Route::group(['prefix' => 'v1'], function(){

    Route::post('/login', [AuthController::class, 'login']);

    
    Route::middleware('auth:sanctum')->group(function(){
        Route::get('/user', [AuthController::class, 'user']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

});