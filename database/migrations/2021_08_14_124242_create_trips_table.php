<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('companions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('companion');
            $table->timestamps();
        });

        Schema::create('purposes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('purpose');
            $table->timestamps();
        });
        
        Schema::create('trips', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->date('departure');
            $table->date('arrival');
            $table->unsignedBigInteger('purpose_id');
            $table->foreign('purpose_id')->references('id')->on('purposes');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
        
        Schema::create('photos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('photo');
            $table->unsignedBigInteger('trip_id');
            $table->foreign('trip_id')->references('id')->on('trips');
            $table->timestamps();
        });

        Schema::create('companion_trip', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('trip_id');
            $table->foreign('trip_id')->references('id')->on('trips')->onDelete('cascade');
            $table->unsignedBigInteger('companion_id');
            $table->foreign('companion_id')->references('id')->on('companions')->onDelete('cascade');
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
        Schema::dropIfExists('companion_trip');
        Schema::dropIfExists('photos');
        Schema::dropIfExists('trips');
        Schema::dropIfExists('purposes');
        Schema::dropIfExists('companions');
        Schema::enableForeignKeyConstraints();
    }
}
