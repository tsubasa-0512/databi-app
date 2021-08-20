<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ItineraryRequest;
use App\Models\Itinerary;
use App\Models\Channel;
use App\Models\Category;

class ItinerariesController extends Controller
{
    // ログインユーザーの旅行詳細データ表示(指定したtripに紐づくものすべて)
    public function getMyItinerary(Request $request) {
        $user_itinerary =  Itinerary::where('trip_id', $request->id)
        ->with('category:id,category')
        ->get();

        return $user_itinerary;
    }
    
    // ユーザーの旅行詳細データを追加
    public function addMyItinerary(ItineraryRequest $request, Itinerary $itinerary) {
        
        $itinerary->category_id = $request->category;
        $itinerary->title = $request->title;
        $itinerary->comment = $request->comment;
        $itinerary->channel_id = $request->channel;
        $itinerary->link = $request->link;
        $itinerary->trip_id = $request->trip_id;
        
        // try{
        //     var_dump($request->title);
            $itinerary->save(); 
        //  }
        //  catch(\Exception $e){
        //     echo $e->getMessage();   
        //  }

        return $itinerary;
    }  
}
