<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    /** @use HasFactory<\Database\Factories\GenreFactory> */
    use HasFactory;

    protected $fillable = ['name'];

    public function applications()
    {
        return $this->belongToMany(Application::class, 'application_genre', 'genre_id', 'application_id');
    }
}
