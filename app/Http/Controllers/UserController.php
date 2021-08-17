<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gender;
use App\Models\Prefecture;
use App\Models\User;

class UserController extends Controller
{
    public function userFormInfo() {
        $gender = Gender::get(['id','gender']);
        $prefecture = Prefecture::get(['id','name']);

        return response()->json([
            'gender' => $gender,
            'prefecture' => $prefecture
        ]);
    }

    public function getMyProfile(Request $request) {
        $user = User::where('id', $request->user()->id)
        ->with('gender:id,gender', 'prefecture:id,name')
        ->first();

        return $user;
    }

    public function updateMyProfile(Request $request, User $user) {
        $user = User::where('id', $request->user()->id)->first();
        
        $user->name = $request->name;
        $user->gender_id = $request->gender_id;
        $user->prefecture_id = $request->prefecture_id;
        $user->age = $request->age;
        $user->link = $request->link;
        $user->icon = $request->icon;
        
        $user->save();

        return $user;
    }
}
