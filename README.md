# The Tap Room

A tap room app to keep track of the kegs

## USE

A tap room web app that allows users and employees to keep track of items at the tap room. Employees can keep track of sold and remaining pints and add new keg types. Kegs have a name, brand, price and alcohol content.

## SET-UP

- you will need to install npm to install package dependencies, use 'npx i -g' to install globally
- enter 'git clone https://github.com/loewymalkov/tap-room-project' from terminal into desktop or desired folder
- in terminal, navigate to root directory with 'cd tap-room-project' 
- enter command 'npm install' to install packages
- enter command 'webpack-dev-server' to launch server
- go to http://localhost:8080 in desired browser or click on link provided by terminal

## SPECS

| Behavior | Input | Output |
|-|-|-|
| user can add new kegs | "Add Keg" | _fill out form for new keg with new fields_ |
| user can view available pints | "X pints" | _displays current number of available pints_ |
| user can change number of available pints| "Sell Pint" | _increases amount of pints for this keg_ |
| when user sells pint it decreases the amount of available pints | "Sold Keg" | _decreases the amount of available pints_ |
| user can see when there are less then 10 pints of a given keg left | "9 pints left" | _reflects amount of pints left_ |

## ROUTES DIAGRAM

https://drive.google.com/file/d/1e58jvxZfmG0Ccixb9n2qXEvYO41myuR0/view?usp=sharing

## TECHNOLOGIES

React, jsx, JavaScript, VS Code, draw.io;

## AUTHORS

Loewy Malkovich, loewymalkov@gmail.com, Nov. 2019

## LICENSE

Open Source 2019 (MIT)
