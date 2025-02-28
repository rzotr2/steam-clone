<?php

namespace App\Filament\Resources\SystemRequiredMacResource\Pages;

use App\Filament\Resources\SystemRequiredMacResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewSystemRequiredMac extends ViewRecord
{
    protected static string $resource = SystemRequiredMacResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
