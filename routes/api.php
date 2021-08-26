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

    // 旅行情報入力に必要な目的・同伴者項目を返す
    Route::get('/trip-form-select','TripsController@formSelect');
    
    // 旅行情報詳細入力に必要なカテゴリ・チャネル項目を返す
    Route::get('/itinerary-form-select','ItinerariesController@itineraryFormSelect');
    
    // デフォルトのランキング一覧を返す
    Route::get('/default-ranking','RankingsController@getDefaultRanking');
});

Route::group(['middleware' => ['auth:api']], function () {
    // ログインユーザー情報表示
    Route::get('/myprofile','UserController@getMyProfile');
    // ユーザー情報編集
    Route::post('/update-myprofile','UserController@updateMyProfile');

    // ログインユーザーの旅行情報表示(すべて)
    Route::get('/mytrip','TripsController@myTrip');
    // ログインユーザーの旅行情報表示(月別)
    Route::get('/mytrip-by-month','TripsController@myTripByMonth');
    // 他のユーザーの旅行情報表示(すべて)
    Route::get('/others-trip','TripsController@othersTrip');
    // ユーザーの特定の旅行情報表示
    Route::get('/show-mytrip','TripsController@showMyTrip');
    // ユーザーの旅行情報追加
    Route::post('/add-mytrip','TripsController@addMyTrip');
    // ユーザーの旅行情報更新
    Route::post('/update-mytrip','TripsController@updateMyTrip');
    // ユーザーの旅行情報削除
    Route::delete('/delete-mytrip','TripsController@deleteMyTrip');
    
    // ログインユーザーの該当旅行情報詳細表示
    Route::get('/get-myitinerary-all','ItinerariesController@getMyItineraryAll');
    // ログインユーザーの該当旅行情報詳細表示（指定したカテゴリ毎）
    Route::get('/get-myitinerary','ItinerariesController@getMyItinerary');
    // ログインユーザーの該当旅行情報詳細追加
    Route::post('/add-myitinerary','ItinerariesController@addMyItinerary');
    // ログインユーザーの該当旅行情報詳細編集
    Route::post('/update-myitinerary','ItinerariesController@updateMyItinerary');
    // ログインユーザーの該当旅行情報削除
    Route::delete('/delete-myitinerary','ItinerariesController@deleteMyItinerary');

    // ログインユーザーのマイランキング一覧表示
    Route::get('/get-myranking','RankingsController@getMyRanking');
    // マイランキング新規作成
    Route::post('/add-myranking','RankingsController@addMyRanking');
    // マイランキング編集
    Route::post('/update-myranking','RankingsController@updateMyRanking');

     // マイランキング削除
     Route::delete('/delete-myranking','RankingsController@deleteMyRanking');
});
