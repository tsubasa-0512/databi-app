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
            $table->date('departure')->nullable();
            $table->date('arrival')->nullable();
            $table->unsignedBigInteger('purpose_id')->nullable();
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

        Schema::create('channels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('channel');
            $table->timestamps();
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('category');
            $table->timestamps();
        });

        Schema::create('itineraries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->string('title');
            $table->text('comment')->nullable();
            $table->integer('bill')->nullable();
            $table->unsignedBigInteger('channel_id')->nullable();
            $table->foreign('channel_id')->references('id')->on('channels');
            $table->text('link')->nullable();
            $table->unsignedBigInteger('trip_id');
            $table->foreign('trip_id')->references('id')->on('trips');
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
        Schema::dropIfExists('itineraries');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('channels');
        Schema::dropIfExists('companion_trip');
        Schema::dropIfExists('photos');
        Schema::dropIfExists('trips');
        Schema::dropIfExists('purposes');
        Schema::dropIfExists('companions');
        Schema::enableForeignKeyConstraints();
    }
}
