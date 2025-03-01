<?php

namespace App\Filament\Resources\PegResource\Pages;

use App\Filament\Resources\PegResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPegs extends ListRecords
{
    protected static string $resource = PegResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
