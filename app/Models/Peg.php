<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peg extends Model
{
    /** @use HasFactory<\Database\Factories\PegFactory> */
    use HasFactory;

    protected $fillable = ['name'];
}
