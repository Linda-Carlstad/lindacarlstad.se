#!/bin/sh

# Function to check if a table exists
check_migration_status() {
    php artisan migrate:status >/dev/null 2>&1
    return $?
}

# Install php project dependencies
composer install

# Install node project dependencies
npm install

# Generate the application key if not already set
if [ -z "$APP_KEY" ]; then
    echo "Generating application key..."
    php artisan key:generate
fi

npm run dev

php artisan serve --host 0.0.0.0 --port 8001
