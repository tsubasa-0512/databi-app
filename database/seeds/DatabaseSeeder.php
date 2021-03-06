<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        $this->call(UserSeeder::class);
        $this->call(CodeSeeder::class);
        $this->call(PrefectureSeeder::class);
        $this->call(GenderSeeder::class);
        $this->call(CompanionSeeder::class);
        $this->call(PurposeSeeder::class);
        $this->call(ChannelSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(DefaultRankingSeeder::class);

        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
