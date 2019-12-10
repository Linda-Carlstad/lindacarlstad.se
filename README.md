<p align="center"><img src="https://lindacarlstad.se/img/logo.png"></p>

# Linda Carlstad

## Description
The official website for the student association Linda Carlstad in Sweden, Karlstad. The association is under and with support from Karlstad University. Linda Carlstad is a association for students studying computer science, web development and software system design. 

## Installation

#### - Unix
Follow the official Laravel documentation for a detailed walkthrough using any Unix system, like macOS or any distribution on Linux.

[Laravel documentation](https://laravel.com/docs/5.8/installation)

#### - Windows
Follow this excellent guide to run a Laravel project on your Windows based computer.

[Codementor guide](https://www.codementor.io/magarrent/how-to-install-laravel-5-xampp-windows-du107u9ji)


When steps above are done, do these steps to get going.

Copy and generate application key: 
```
cp .env.example .env
php artisan key:generate
```

Install all composer dependencies: 
```
composer install
```

Install all NPM dependencies: 
```
npm install
```

Before migrating, download the admin panel (custom CMS): https://github.com/Linda-Carlstad/admin.lindacarlstad.se to get the correct database migrations. 

Create and seed database (admin panel):
```
php artisan migrate:refresh --seed
```

Run this to generate CSS and JS files:
```
npm run watch
```

Run the local development server: 
```
php artisan serve
```

## Usage
The website uses the information filled in using the custom-build CMS system, [Admin Linda Carlstad](https://github.com/Linda-Carlstad/admin.lindacarlstad.se). 

(add pictures of app)

## Contributing
#### - Issues
- Screenshot the problem
- Open a new issue
- Give it a meaningful title
- Describe the issue clearly
- Upload the screenshot
- Add useful labels
- Submit issue

#### - Coding
- See the [issue list](https://github.com/Linda-Carlstad/lindacarlstad.se/issues)
- Assign yourself to an issue
- Open a new branch
- Create your _beautiful_ code
- Create a pull request

## Software
Recommended apps to get going fast:
- Atom/Sublime/PHPStorm
- MAMP
- Sequal Pro
- Google Chrome/Mozilla FireFox
- Sketch (design tool)

## Credits
Special thanks to Linda Carlstad It-committee 2018/2019 for creating this website.
