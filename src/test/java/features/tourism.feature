Feature: Curso de automation

Scenario Outline: Log in to the system

Given I enter a username <username>
And I enter a password <password>
When I click  Sign-In button
Then login result must be <result>

Examples:
|username |password |result     |
| pepe    | pepe    | badLogin  |
| mercury | mercury | goodLogin |


Scenario Outline: Register a new user in the site

Given click the REGISTER button
And I enter a firstname <firstname>
And I enter a lastname <lastname>
And I enter a phone <phone>
And I enter a email <email>
And I enter a adress1 <adress1>
And I enter a adress2 <adress2>
And I enter a city <city>
And I enter a state <state>
And I enter a postalCode <postalCode>
And I enter a country <country>
And I enter a user <user>
And I enter a password <password>
And I enter a cPassword <cPassword>
When I click SUBMIT button
Then register result must be <result>

Examples:
| firstname | lastname | phone 		| email			| adress1  | adress2 | city | state | postalCode | country	 | user | password | cPassword | result |
| carlos	| perez	   | 42289758 	| jg@gmail.com  | Abalbin1 | balbin2 | BsAs | BsAs  | 1888		 | ARGENTINA | pepe | peperoni | peperoni  | succes |
