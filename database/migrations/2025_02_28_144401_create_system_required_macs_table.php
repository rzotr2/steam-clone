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
        Schema::create('system_required_macs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('app_id')->unique()->constrained('applications')->onDelete('cascade');
            $table->string('min_cpu');
            $table->string('min_gpu');
            $table->string('min_audio')->nullable();
            $table->string('min_addition')->nullable();
            $table->string('r_cpu');
            $table->string('r_gpu');
            $table->string('r_audio')->nullable();
            $table->string('r_addition')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('system_required_macs');
    }
};
