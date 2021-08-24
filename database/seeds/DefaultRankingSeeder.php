<?php

use Illuminate\Database\Seeder;

class DefaultRankingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('default_rankings')->truncate();
        DB::table('default_rankings')->insert([
            [
                'id' => 1,
                'title' => '朝食がおいしい',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 2,
                'title' => 'クラブラウンジの満足度が高い',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 3,
                'title' => '贅を尽くした',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 4,
                'title' => 'コスパの良い',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 5,
                'title' => '乳幼児連れに（も）おすすめ',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 6,
                'title' => '未就学児連れに（も）おすすめ',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 7,
                'title' => '大人だけの旅行におすすめ',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 8,
                'title' => 'お風呂（大浴場/露天風呂/温泉）が良い',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 9,
                'title' => 'ジムやプールが充実している',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);
    }
}
