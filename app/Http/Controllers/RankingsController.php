<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  Illuminate\Support\Facades\DB;
use App\Http\Requests\RankingRequest;
use App\Models\Ranking;
use App\Models\Itinerary;

class RankingsController extends Controller
{
    // デフォルトのランキング一覧を返す
    public function getDefaultRanking() {
        return DB::table('default_rankings')->pluck('id','title');
    }

    // ユーザーのマイランキング一覧表示
    public function getMyRanking(Request $request) {
        return Ranking::where('user_id', $request->user()->id)->get();
    }

    //ユーザーがマイランキングを新規作成
    public function addMyRanking(RankingRequest $request, Ranking $ranking) {
        $ranking->title = $request->title;
        $ranking->user_id = $request->user()->id;

        $ranking->save();

        return $ranking;
    }

    //ユーザーがマイランキングを編集
    public function updateMyRanking(RankingRequest $request, Ranking $ranking) {
        $ranking = Ranking::where('id', $request->id)->first();
        
        $ranking->title = $request->title;
        $ranking->user_id = $request->user()->id;

        $ranking->save();

        return $ranking;
    }

    // ユーザーがマイランキングを削除
    public function deleteMyRanking(Request $request, Ranking $ranking) {
        $ranking = Ranking::where('id', $request->id)->first();
        $ranking->delete();

        return '削除完了';
    }
}
