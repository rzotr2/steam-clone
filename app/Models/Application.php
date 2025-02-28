<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Application extends Model
{
    /** @use HasFactory<\Database\Factories\ApplicationFactory> */
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'publisher', 'developer', 'tags',
        'release', 'dlc_content', 'language_interface', 'language_full',
        'language_subtitle', 'part_controller', 'controller', 'support_system',
        'min_ram', 'r_ram', 'storage'
    ];

    protected $casts = [
        'tags' => 'array',
        'language_interface' => 'array',
        'language_full' => 'array',
        'language_subtitle' => 'array',
        'part_controller' => 'array',
        'controller' => 'array',
        'support_system' => 'array',
    ];

    public function systemRequiredMac()
    {
        return $this->hasOne(SystemRequiredMac::class, 'app_id');
    }

    public function systemRequiredWindows()
    {
        return $this->hasOne(SystemRequiredWindows::class, 'app_id');
    }

    public function systemRequiredLinux()
    {
        return $this->hasOne(SystemRequiredLinux::class, 'app_id');
    }

    public function supportSystems()
    {
        return $this->belongsToMany(System::class, 'application_system', 'application_id', 'system_id');
    }
    
    public function controllers()
    {
        return $this->belongsToMany(Controller::class, 'application_controller');
    }

    public function partControllers()
    {
        return $this->belongsToMany(Controller::class, 'application_part_controller');
    }
    
    public function languageInterface(): BelongsToMany
    {
        return $this->belongsToMany(Language::class, 'application_language_interface');
    }

    public function languageFull(): BelongsToMany
    {
        return $this->belongsToMany(Language::class, 'application_language_full');
    }

    public function languageSubtitle(): BelongsToMany
    {
        return $this->belongsToMany(Language::class, 'application_language_subtitle');
    }
    public function publishers()
    {
        return $this->belongsToMany(Publisher::class, 'application_publisher');
    }

    public function developers(): BelongsToMany
    {
        return $this->belongsToMany(Developer::class, 'application_developer');
    }

    public function parentApp()
    {
        return $this->belongsTo(Application::class, 'dlc_content');
    }
}
