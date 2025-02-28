<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class System extends Model
{
    /** @use HasFactory<\Database\Factories\SystemFactory> */
    use HasFactory;

    protected $fillable = ['name'];

    public function applications()
    {
        return $this->belongsToMany(Application::class, 'application_system', 'system_id', 'application_id');
    }
}
