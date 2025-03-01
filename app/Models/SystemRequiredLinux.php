<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SystemRequiredLinux extends Model
{
    /** @use HasFactory<\Database\Factories\SystemRequiredLinuxFactory> */
    use HasFactory;

    protected $fillable = [
        'app_id', 'min_cpu', 'min_gpu', 'min_audio', 'min_addition',
        'r_cpu', 'r_gpu', 'r_audio', 'r_addition'
    ];

    public function application(): BelongsTo
    {
        return $this->belongsTo(Application::class, 'app_id');
    }
}
