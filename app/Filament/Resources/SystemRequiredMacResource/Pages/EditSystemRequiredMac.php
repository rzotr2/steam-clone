<?php

namespace App\Filament\Resources\SystemRequiredMacResource\Pages;

use App\Filament\Resources\SystemRequiredMacResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSystemRequiredMac extends EditRecord
{
    protected static string $resource = SystemRequiredMacResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
