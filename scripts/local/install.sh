docker run --rm --pull=always -v "$(pwd)":/opt -w /opt laravelsail/php84-composer:latest bash -c "composer install"
./../../vendor/bin/sail composer build
./../../vendor/bin/sail up -d
./../../vendor/bin/sail npm i
./../../vendor/bin/sail artisan migrate
./../../vendor/bin/sail stop
