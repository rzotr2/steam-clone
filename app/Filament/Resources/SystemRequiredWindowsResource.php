<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SystemRequiredWindowsResource\Pages;
use App\Filament\Resources\SystemRequiredWindowsResource\RelationManagers;
use App\Models\SystemRequiredWindows;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\SelectFilter;
use Filament\Forms\Components\Section;

class SystemRequiredWindowsResource extends Resource
{
    protected static ?string $model = SystemRequiredWindows::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
            Section::make('Application')
                ->schema([ 
                    Forms\Components\Select::make('app_id')
                        ->relationship('application', 'name', function ($query) {
                            return $query->whereHas('systems', fn ($q) => $q->where('name', 'Windows'));
                        })
                        ->searchable()
                        ->preload()
                        ->required(),
            ]),
            Section::make('Minimum required')
                ->schema([
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
                ])->columns(2),
            Section::make('Recommended required')
                ->schema([
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
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('application.name')
                    ->label('Application Name')
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
            'index' => Pages\ListSystemRequiredWindows::route('/'),
            'create' => Pages\CreateSystemRequiredWindows::route('/create'),
            'view' => Pages\ViewSystemRequiredWindows::route('/{record}'),
            'edit' => Pages\EditSystemRequiredWindows::route('/{record}/edit'),
        ];
    }
}
