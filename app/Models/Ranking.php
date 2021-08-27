<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ranking extends Model
{
    public function itineraries() { 
        return $this->belongsToMany('App\Models\Itinerary')->withTimestamps();   
    }
}
