# The Tap Room

A tap room app to keep track of the kegs. 

## USE

A tap room web app that allows users and employees to keep track of items at the tap room. 

## SET-UP

- you will need to install npm to install package dependencies, use 'npx i -g' to install globally
- enter 'git clone https://github.com/loewymalkov/tap-room-project' from terminal into desktop or desired folder
- in terminal, navigate to root directory with 'cd tap-room-project' 
- enter command 'npm install' to install packages
- enter command 'webpack-dev-server' to launch server
- open //local.8080/# in desired browser or click on link provided by terminal

## SPECS

| Behavior | Input | Output |
|-|-|-|
| PATRON BEHAVIORS|
| patron can see menu of kegs | "kegs" | _list of available kegs_ |
| patron can see the name, brand, price and alcohol content of each keg | "Stonks" | "Stonks, Stonking Kegs, 13$, 69%" |
| patron can see color coded info for price | "$2 .. $5 .. $8" | _2 is blue, 5 is yellow, 8 is purple_ |
| patron can see a different icon for alcohol content strength | "10% .. 15%" | _10% has small pint icon, 15% has big pint icon_  |
|-|-|-|
| EMPLOYEE BEHAVIORS |
| employee can add new kegs | "Add Keg" | _fill out form for new keg with new fields_ |
| employee can edit a kegs properties | "edit this keg" | _fill out form for existing keg to overwrite fields_ |
| employee can add # of kegs sold | "Sold Keg" | _increases amount of this keg that was sold_ |
| when employee sells keg, it decreases the amount of available pints | "Sold Keg" | _decreases the amount of available pints_ |
| employee can see when there are less then 10 pints of a given keg left | "9 pints left" | _reflects amount of pints left_ |



## TECHNOLOGIES

React, jsx, JavaScript, VS Code, draw.io;

## AUTHORS

Loewy Malkovich, loewymalkov@gmail.com, Nov. 2019

## LICENSE

Open Source 2019 (MIT)
