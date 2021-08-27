<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{
    public function category() { 
        return $this->belongsTo('App\Models\Category');
    }

    public function rankings() { 
        return $this->belongsToMany('App\Models\Ranking')->withTimestamps();   
    }

}
