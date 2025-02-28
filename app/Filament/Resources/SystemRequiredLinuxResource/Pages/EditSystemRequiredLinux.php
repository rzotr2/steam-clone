<?php

namespace App\Filament\Resources\SystemRequiredLinuxResource\Pages;

use App\Filament\Resources\SystemRequiredLinuxResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSystemRequiredLinux extends EditRecord
{
    protected static string $resource = SystemRequiredLinuxResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
