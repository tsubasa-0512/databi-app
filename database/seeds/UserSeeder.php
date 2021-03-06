<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('users')->truncate();

        factory(User::class)->create([
            'name' => 'ใในใ',
            'email' => 'test@gmail.com',
            'password' => Hash::make('password'),
            'prefecture_id' => 4,
            'gender_id' => 2,
        ]);
    }
}
