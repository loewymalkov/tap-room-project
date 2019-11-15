# The Tap Room

A tap room app to keep track of the kegs. 

## USE

A tap room web app that allows users and employees to keep track of items at the tap room. 

## SET-UP

## SPECS






As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.
Requirements

| Behavior | Input | Output |
|-|-|-|
| PATRON BEHAVIORS|
| user can see menu of kegs | "kegs" | _list of available kegs_ |
| user can see the name, brand, price and alcohol content of each keg | "Stonks" | "Stonks, Stonking Kegs, 13$, 69%" |
|-|-|-|
| EMPLOYEE BEHAVIORS |
|-|-|-|
| employee can add new kegs | "Add Keg" | _fill out form for new keg with new fields_ |
| employee can edit a kegs properties | "edit this keg" | _fill out form for existing keg to overwrite fields_ |
| employee can add # of kegs sold | "Sold Keg" | _increases amount of this keg that was sold_ |
| when employee sells keg, it decreases the amount of available pints | "Sold Keg" | _decreases the amount of available pints_ |
| employee can see when there are less then 10 pints of a given keg left | "9 pints left" | _reflects amount of pints left_ |



## TECHNOLOGIES

React, jsx, JavaScript, VS Code. 

## AUTHORS

Loewy Malkovich, loewymalkov@gmail.com, Nov. 2019

## LICENSE

Open Source 2019 (MIT)
