<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ItineraryRequest;
use App\Models\Itinerary;
use App\Models\Channel;
use App\Models\Category;

class ItinerariesController extends Controller
{
    // 目的・同伴者項目を返す
    public function itineraryFormSelect() {
        $category = Category::all();
        $channel = Channel::all();

        return response()->json([
            'category' => $category,
            'channel' => $channel
        ]);
    }
    
    // ログインユーザーの旅行詳細データ表示(指定したtripに紐づくものすべて)
    public function getMyItineraryAll(Request $request) {
        $user_itinerary =  Itinerary::where('trip_id', $request->id)
        ->with('category:id,category')
        ->get();

        return $user_itinerary;
    }
    // ログインユーザーの旅行詳細データ表示(指定したtrip・カテゴリに紐づくデータ)
    public function getMyItinerary(Request $request) {
        $user_itinerary =  Itinerary::where('trip_id', $request->id)
        ->where('category_id', $request->category_id)
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
        $itinerary->bill = $request->bill;
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

    // ユーザーの旅行詳細データを編集
    public function updateMyItinerary(ItineraryRequest $request, Itinerary $itinerary) {
        $itinerary = Itinerary::where('id', $request->id)->first();
        
        $itinerary->category_id = $request->category;
        $itinerary->title = $request->title;
        $itinerary->comment = $request->comment;
        $itinerary->channel_id = $request->channel;
        $itinerary->bill = $request->bill;
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

    // ユーザーの旅行情報詳細削除
    public function deleteMyItinerary(Request $request, Itinerary $itinerary) {
        $trip = Itinerary::where('id', $request->id)->first();
        $trip->delete();

        return '削除完了';
    }
}
