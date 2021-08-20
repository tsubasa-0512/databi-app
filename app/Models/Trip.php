<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    public function purpose() { 
        return $this->belongsTo('App\Models\Purpose');
    }

    public function companions() { 
        return $this->belongsToMany('App\Models\Companion')->withTimestamps();   
    }

    public function itineraries() { 
        return $this->hasMany('App\Models\Itinerary');
    }
}
