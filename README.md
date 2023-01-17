# API-REST
My api REST CRUD made with Express, Node and MySQL

## Installation
First of all we will need to install Node (Currently v18.13.0), you can download it here: 
https://nodejs.org/en/

To set up the server we need to install Express (Currently ^4.18.2), you can download it by typing:
$ npm install express

For database management we are going to install XAMPP, it's easy to download and use, you can download it here:
https://www.apachefriends.org/es/index.html


For connection and queries we are going to install MySQL2 module from npm, you can download it by typing:
$ npm install --save mysql2


For environment variables we are going to install dotenv, you can download it by typing:
$ npm install dotenv --save


Finally we are going to install the nodemon development tool, to debug easily, you can install it by typing:
$ npm install nodemon -D

to use nodemon correctly we need to go to the package.json file and edit the script and configure it like this:
"scripts": {
    "dev": "nodemon 'index route'"
  },

(Replace index route)

## Run
To run it you just need to type: 
$ npm run dev

And open xampp and START MySQL service
