<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api']], function () {
    // 目的・同伴者項目を返す
    Route::get('/trip-form-select','TripsController@formSelect');
});

Route::group(['middleware' => ['auth:api']], function () {
    // ユーザーの旅行情報追加
    Route::post('/add-mytrip','TripsController@addMyTrip');
});
