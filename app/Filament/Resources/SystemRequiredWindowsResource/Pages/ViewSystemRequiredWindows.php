<?php

namespace App\Filament\Resources\SystemRequiredWindowsResource\Pages;

use App\Filament\Resources\SystemRequiredWindowsResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewSystemRequiredWindows extends ViewRecord
{
    protected static string $resource = SystemRequiredWindowsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
