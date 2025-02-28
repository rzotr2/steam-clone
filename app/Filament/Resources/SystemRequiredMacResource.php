<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SystemRequiredMacResource\Pages;
use App\Filament\Resources\SystemRequiredMacResource\RelationManagers;
use App\Models\SystemRequiredMac;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SystemRequiredMacResource extends Resource
{
    protected static ?string $model = SystemRequiredMac::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('app_id')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('min_cpu')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('min_gpu')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('min_audio')
                    ->maxLength(255),
                Forms\Components\TextInput::make('min_addition')
                    ->maxLength(255),
                Forms\Components\TextInput::make('r_cpu')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('r_gpu')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('r_audio')
                    ->maxLength(255),
                Forms\Components\TextInput::make('r_addition')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('app_id')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('min_cpu')
                    ->searchable(),
                Tables\Columns\TextColumn::make('min_gpu')
                    ->searchable(),
                Tables\Columns\TextColumn::make('min_audio')
                    ->searchable(),
                Tables\Columns\TextColumn::make('min_addition')
                    ->searchable(),
                Tables\Columns\TextColumn::make('r_cpu')
                    ->searchable(),
                Tables\Columns\TextColumn::make('r_gpu')
                    ->searchable(),
                Tables\Columns\TextColumn::make('r_audio')
                    ->searchable(),
                Tables\Columns\TextColumn::make('r_addition')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSystemRequiredMacs::route('/'),
            'create' => Pages\CreateSystemRequiredMac::route('/create'),
            'view' => Pages\ViewSystemRequiredMac::route('/{record}'),
            'edit' => Pages\EditSystemRequiredMac::route('/{record}/edit'),
        ];
    }
}
