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

Install all composer dependencies: 
```
composer install
```

Install all NPM dependencies: 
```
npm install
```

Copy and generate application key: 
```
cp .env.example .env
php artisan key:generate
```

> Linda Carlstad website uses the same database as the [Linda Carlstad Admin Panel](https://github.com/Linda-Carlstad/admin.lindacarlstad.se), see how to set up the datbase in that project before continuing with this one. The name of the database is therefore dependent of what you have named the datbase in the [Linda Carlstad Admin Panel](https://github.com/Linda-Carlstad/admin.lindacarlstad.se) prject. Credidentals should match that one to be used in this project See example below.  

Edit the `.env` file with your database credidentials. 
Here is an example:
```
DB_PORT=3306
DB_DATABASE=adminpanel
DB_USERNAME=root
DB_PASSWORD=root
```
Before migrating, download the admin panel (custom CMS) [Linda Carlstad Admin Panel](https://github.com/Linda-Carlstad/admin.lindacarlstad.se) to get the correct database migrations. 

Once done, continue with the setup. 
Create and seed database (admin panel):
```
php artisan migrate:refresh --seed
```

Run this to generate CSS and JS files:
```
npm run dev
```

Run the local development server: 
```
php artisan serve
```

## Usage
The website uses the information filled in using the custom-build CMS system, [Admin Linda Carlstad](https://github.com/Linda-Carlstad/admin.lindacarlstad.se). 

## Images
#### Landing page
![Ladning page](https://i.ibb.co/x6RkHhm/landing.png "Ladning page")

#### About us
![About us](https://i.ibb.co/DrkxcDM/about.png "About us")

#### Contact form
![Contact form](https://i.ibb.co/F4s7P7B/contact-form.png "Contact form")

#### Program overview
![Program overview](https://i.ibb.co/vDry00J/programs.png "Program overview")

#### Footer
![Footer](https://i.ibb.co/kX4j9Xv/footer.png "Footer")

### Songs
#### Song overview
![Song overview](https://i.ibb.co/bzbF0nK/songs.png "Song overview")

#### Hidden songs gate
![Hidden songs gate](https://i.ibb.co/31FNHkJ/songs-gate.png "Hidden songs gate")



### Initation
#### Initiation overview
![Initiation overview](https://i.ibb.co/0JhD9DV/initiations.png "Initiation overview")

#### Initiation show
![Initiation 2019](https://i.ibb.co/vqzXhxC/initiation-2019.png "Initiation 2019")

#### Initiation information
![Initiation 2019 Information](https://i.ibb.co/pZC32vZ/initiation-2019-info.png "Initiation 2019 Information")

#### Initiation contact
![Initiation contact](https://i.ibb.co/DYtHsVJ/initiation-2019-contact.png "Initiation contact")


## Contributing

Can also be found here - [Contributing to Linda Carlstad](https://github.com/Linda-Carlstad/lindacarlstad.se/blob/master/CONTRIBUTING.md)

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
