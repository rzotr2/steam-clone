<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Controller extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function applications()
    {
        return $this->belongsToMany(Application::class, 'application_controller', 'controller_id', 'application_id');
    }
}