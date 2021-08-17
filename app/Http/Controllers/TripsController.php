<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Trip;
use App\Models\Purpose;
use App\Models\Companion;
use App\Http\Requests\TripRequest;

class TripsController extends Controller
{
    // 目的・同伴者項目を返す
    public function formSelect() {
        $purpose = Purpose::all();
        $companion = Companion::all();

        return response()->json([
            'purpose' => $purpose,
            'companion' => $companion
        ]);
    }
    
    // ユーザーの旅行情報を一覧表示
    public function myTrip(Request $request) {
        $user_trip =  Trip::where('user_id', $request->user()->id)
        ->with('purpose','companions')
        ->get();

        return $user_trip;
    }

    // ユーザーの旅行情報を一覧表示(月別)
    public function myTripByMonth(Request $request) {
        $month = $request->month;

        $user_trip =  Trip::where('user_id', $request->user()->id)
        ->with('purpose','companions')
        ->whereMonth('created_at', $month)
        ->get();

        return $user_trip;
    }

    
    // ユーザーの旅行情報追加
    public function addMyTrip(TripRequest $request, Trip $trip) {
        
        $trip->title = $request->title;
        $trip->departure = $request->departure;
        $trip->arrival = $request->arrival;
        $trip->purpose_id = $request->purpose;
        $trip->user_id = $request->user()->id;
        
        // try{
        //     var_dump($request->title);
            $trip->save(); 
        //  }
        //  catch(\Exception $e){
        //     echo $e->getMessage();   
        //  }
        
        foreach ($request->companion as $com){
            $trip->companions()->attach($com);
        }
        
        return $trip;
    }

    // ユーザーの特定の旅行情報を表示
    public function showMyTrip(Request $request) {

        $user_trip =  Trip::where('id', $request->id)
        ->with('purpose','companions')
        ->get();

        return $user_trip;
    }

    // ユーザーの旅行情報更新
    public function updateMyTrip(TripRequest $request, Trip $trip) {
        $trip = Trip::where('id', $request->id)->first();
        
        $trip->title = $request->title;
        $trip->departure = $request->departure;
        $trip->arrival = $request->arrival;
        $trip->purpose_id = $request->purpose;
        
        $trip->save();
        
        $trip->companions()->detach();
        foreach ($request->companion as $com){
            $trip->companions()->attach($com);
        }
        
        return $trip;
    }

    public function deleteMyTrip(Request $request, Trip $trip) {
        $trip = Trip::where('id', $request->id)->first();
        $trip->delete();

        return '削除完了';
    }
}
