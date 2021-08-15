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
    // プロフィール入力に必要な性別・都道府県項目を返す
    Route::get('/user-form-info','UserController@userFormInfo');
    // 目的・同伴者項目を返す
    Route::get('/trip-form-select','TripsController@formSelect');
});

Route::group(['middleware' => ['auth:api']], function () {
    // ログインユーザー情報表示
    Route::get('/myprofile','UserController@getMyProfile');
    // ユーザーの旅行情報表示(すべて)
    Route::get('/mytrip','TripsController@myTrip');
    // ユーザーの旅行情報表示(月別)
    Route::get('/mytrip-by-month','TripsController@myTripByMonth');
    // ユーザーの特定の旅行情報表示
    Route::get('/show-mytrip','TripsController@showMyTrip');
    // ユーザーの旅行情報追加
    Route::post('/add-mytrip','TripsController@addMyTrip');
    // ユーザーの旅行情報更新
    Route::post('/update-mytrip','TripsController@updateMyTrip');
});
