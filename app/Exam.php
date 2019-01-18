<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exams';

    public function user()
    {
        return $this->belongsTo( 'App\User' );
    }


}
