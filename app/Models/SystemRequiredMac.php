<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemRequiredMac extends Model
{
    /** @use HasFactory<\Database\Factories\SystemRequiredMacFactory> */
    use HasFactory;
    
    public function application()
    {
        return $this->belongsTo(Application::class, 'app_id');
    }
}
