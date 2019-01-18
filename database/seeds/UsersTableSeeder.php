<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
           'name' => 'Linda Carlstad Admin',
           'id_number' => '991212-1919',
           'verified' => true,
           'email' => 'info@lindacarlstad.se',
           'password' => bcrypt('lindacarlstad'),
           'email_verified_at' => now(),
       ]);
       $users = factory(User::class, 10)->create();
    }
}
