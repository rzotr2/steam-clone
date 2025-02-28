<?php

namespace App\Filament\Resources\SystemRequiredLinuxResource\Pages;

use App\Filament\Resources\SystemRequiredLinuxResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSystemRequiredLinuxes extends ListRecords
{
    protected static string $resource = SystemRequiredLinuxResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
