<?php

use App\Exam;
use Illuminate\Database\Seeder;

class ExamTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $exams = factory(Exam::class, 10)->create();
    }
}
