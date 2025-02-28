docker run --rm --pull=always -v "$(pwd)":/opt -w /opt laravelsail/php84-composer:latest bash -c "composer install --ignore-platform-reqs"
./vendor/bin/sail build
./vendor/bin/sail up -d
./vendor/bin/sail composer install
./vendor/bin/sail npm i
./vendor/bin/sail artisan migrate
./vendor/bin/sail stop
alias sail="sh $([ -f sail ] && echo sail || echo vendor/bin/sail)"
alias artisan="sh $([ -f sail ] && echo sail || echo vendor/bin/sail artisan)"
