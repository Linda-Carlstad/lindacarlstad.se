<?php

use Faker\Generator as Faker;

$factory->define(App\Exam::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'courseCode' => $faker->word,
        'verified' => false,
        'document' => $faker->fileExtension,
        'user_id' => $faker->numberBetween(1, 10),
    ];
});
