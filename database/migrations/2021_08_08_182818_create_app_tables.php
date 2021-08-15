<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('prefectures', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('genders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('gender');
            $table->timestamps();
        });

        Schema::create('codes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('code');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('prefectures');
        Schema::dropIfExists('genders');
        Schema::dropIfExists('codes');
        Schema::enableForeignKeyConstraints();
    }
}
