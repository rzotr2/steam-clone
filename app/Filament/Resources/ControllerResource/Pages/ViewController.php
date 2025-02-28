<?php

namespace App\Filament\Resources\ControllerResource\Pages;

use App\Filament\Resources\ControllerResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewController extends ViewRecord
{
    protected static string $resource = ControllerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
