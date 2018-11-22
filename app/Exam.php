<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{

    public function user(){
        return $this->belongsTo('App\User');
    }
    //
    protected $table = 'exams';
}
