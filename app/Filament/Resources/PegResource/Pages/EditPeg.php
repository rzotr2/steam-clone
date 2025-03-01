<?php

namespace App\Filament\Resources\PegResource\Pages;

use App\Filament\Resources\PegResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPeg extends EditRecord
{
    protected static string $resource = PegResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
