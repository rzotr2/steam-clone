<?php

namespace App\Filament\Resources\SystemRequiredWindowsResource\Pages;

use App\Filament\Resources\SystemRequiredWindowsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSystemRequiredWindows extends EditRecord
{
    protected static string $resource = SystemRequiredWindowsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
