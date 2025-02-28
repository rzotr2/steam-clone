<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->text('description')->nullable();
            $table->string('publisher')->default('Unknown Publisher');
            $table->string('developer')->nullable();
            $table->json('tags')->nullable();
            $table->date('release')->nullable();
            $table->foreignId('dlc_content')->nullable()->constrained('applications')->onDelete('cascade');
            $table->json('language_interface')->nullable();
            $table->json('language_full')->nullable();
            $table->json('language_subtitle')->nullable();
            $table->json('part_controller')->nullable();
            $table->json('controller')->nullable();
            $table->json('support_system')->nullable();
            $table->integer('min_ram')->nullable();
            $table->integer('r_ram')->nullable();
            $table->integer('storage')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
