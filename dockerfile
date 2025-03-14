FROM php:8.2

RUN apt update
RUN apt install -y \
        nodejs \
        npm \
        libpng-dev \
        libonig-dev \
        libxml2-dev\
        libzip-dev \
        unzip \
        zip \
        sassc \
        webpack

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Add and use non-root user. Fixes written files being owned by root
RUN groupadd user && useradd -m user -g user
USER user
