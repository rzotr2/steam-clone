<?php

namespace App\Filament\Resources\PegResource\Pages;

use App\Filament\Resources\PegResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewPeg extends ViewRecord
{
    protected static string $resource = PegResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
