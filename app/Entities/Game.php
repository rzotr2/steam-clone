<?php

namespace App\Entities;

class Game {

    public static function getGame(): array {
        return [
            [
                'id_game' => 1,
                'name' => 'Name Test',
                'tags' => [
                    '1' => 'Test tag 1', 
                    '2' => 'Test tag 2', 
                    '3' => 'Test tag 3',
                ],
                'platforms' => [
                    'Windows' => true, 
                    'Linux' => true, 
                    'MacOS' => true
                ],
                'price' => 100,
                'discount' => 0.2,
                'Description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy 
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                                like Aldus PageMaker including versions of Lorem Ipsum.',
                'relize_date' => '07.02.2025',
                'PEG' => 13,
                'type' => 0, // 0 - game, 1 - DLC for game
                'link_game' => 0, // 0 - empty or id_game
                'controls' => [
                    '1' => 'x360', 
                    '2' => 'PS', 
                    '3' => 'USB controler',
                ],
                'languages' => [
                    'ua' => true,
                    'en' => true, 
                    'ch' => true
                ]
            ],
        ];
    }
}