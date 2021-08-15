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
    
    // ユーザーの旅行情報追加
    public function addMyTrip(TripRequest $request, Trip $trip) {
        $companion = implode(",", $request->companion);

        $trip->title = $request->title;
        $trip->departure = $request->departure;
        $trip->arrival = $request->arrival;
        $trip->purpose_id = $request->purpose;
        $trip->companion = $companion;
        $trip->user_id = $request->user()->id;

        $trip->save();

        return $trip;
    }
}
