<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemRequiredWindows extends Model
{
    /** @use HasFactory<\Database\Factories\SystemRequiredWindowsFactory> */
    use HasFactory;

    public function application()
    {
        return $this->belongsTo(Application::class, 'app_id');
    }
}
