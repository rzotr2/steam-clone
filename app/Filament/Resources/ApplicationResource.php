<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicationResource\Pages;
use App\Filament\Resources\ApplicationResource\RelationManagers;
use App\Models\Application;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Section;

class ApplicationResource extends Resource
{
    protected static ?string $model = Application::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('General')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Select::make('dlc_content')
                            ->label('DLC Parent')
                            ->relationship('parentApp', 'name'),
                        Forms\Components\MultiSelect::make('publisher')
                            ->label('Publisher')
                            ->relationship('publishers', 'name')
                            ->preload()
                            ->required(),
                        Forms\Components\TextInput::make('price')
                            ->label('Price')
                            ->required()
                            ->numeric(),
                        Forms\Components\TextInput::make('discount')
                            ->label('Discount from 0 to 1')
                            ->required()
                            ->numeric(),
                        Forms\Components\Select::make('peg_rating')
                            ->label('Peg rating')
                            ->relationship('pegs', 'name'),
                        Forms\Components\MultiSelect::make('developer')
                            ->label('Developer')
                            ->relationship('developers', 'name')
                            ->preload()
                            ->required(),
                        Forms\Components\TextInput::make('tags'),
                        Forms\Components\DatePicker::make('release')
                            ->required()
                            ->displayFormat('d/m/Y')
                            ->native(false),
                        Forms\Components\MultiSelect::make('support_system')
                            ->label('Supported Operating Systems')    
                            ->relationship('supportSystems', 'name')
                            ->preload()
                            ->multiple()
                            ->required(),
                        Forms\Components\MultiSelect::make('genre')
                            ->label('Select genre')
                            ->relationship('genres', 'name')
                            ->preload(),
                        Forms\Components\Textarea::make('description')
                            ->required()
                            ->columnSpanFull(),
                    ])->columns(3),
                Section::make('Language')
                    ->schema([
                        Forms\Components\MultiSelect::make('language_interface')
                            ->relationship('languageInterface', 'name')
                            ->label('Interface Languages')
                            ->preload(),
                        Forms\Components\MultiSelect::make('language_full')
                            ->relationship('languageFull', 'name')
                            ->label('Audio Languages')
                            ->preload(),
                        Forms\Components\MultiSelect::make('language_subtitle')
                            ->label('Subtitle Languages')
                            ->relationship('languageSubtitle', 'name')
                            ->preload(),
                    ])->columns(3),
                Section::make('Controller')
                    ->schema([
                        Forms\Components\MultiSelect::make('controller')
                            ->label('Supported Controllers')
                            ->relationship('controllers', 'name')
                            ->preload(),
                        Forms\Components\MultiSelect::make('part_controller')
                            ->label('Partially Supported Controllers')
                            ->relationship('partControllers', 'name')
                            ->preload(),
                    ])->columns(2),
                Section::make('Main system requires')
                    ->schema([
                        Forms\Components\TextInput::make('min_ram')
                            ->label('Minimum RAM (GB)')
                            ->required()
                            ->numeric(),
                        Forms\Components\TextInput::make('r_ram')
                            ->label('Recommended RAM (GB)')
                            ->required()
                            ->numeric(),
                        Forms\Components\TextInput::make('storage')
                            ->label('Storage (GB)')
                            ->required()
                            ->numeric(),
                    ])->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('publisher')
                    ->searchable(),
                Tables\Columns\TextColumn::make('developer')
                    ->searchable(),
                Tables\Columns\TextColumn::make('release')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('dlc_content')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('min_ram')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('r_ram')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('storage')
                    ->numeric()
                    ->sortable(),
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
            'index' => Pages\ListApplications::route('/'),
            'create' => Pages\CreateApplication::route('/create'),
            'view' => Pages\ViewApplication::route('/{record}'),
            'edit' => Pages\EditApplication::route('/{record}/edit'),
        ];
    }
}
