<?php

namespace App\Filament\Resources\SystemRequiredLinuxResource\Pages;

use App\Filament\Resources\SystemRequiredLinuxResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewSystemRequiredLinux extends ViewRecord
{
    protected static string $resource = SystemRequiredLinuxResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
