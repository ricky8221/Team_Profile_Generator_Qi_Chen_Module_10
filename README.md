# Team_Profile_Generator_Qi_Chen_Module_10

## Technology Used
* JavaScript
* HTML
* CSS
* jQuery
* BootStrap
* npm
* inquirer
* jest
* fs
* Cloudflare
* Google font
* JSDelivr 

## Description
Generate a team profile HTML with:
* manager(Name, ID, Email, office number)
* Engineer(Name, ID, Email, office, Github link) 
* Intern(Name, ID, Email, office, school)


## Setup/Installation
* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open indes.js in your code editor

## Known Bugs
N/A

## License
MIT

Copyright(c) 2022 Qi Chen

## User Story
AS A manager<br>
I WANT to generate a webpage that displays my team's basic info<br>
SO THAT I have quick access to their emails and GitHub profiles<br>

## Acceptance Criteria
GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for my team members and their information<br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br>
WHEN I click on an email address in the HTML<br>
THEN my default email program opens and populates the TO field of the email with the address<br>
WHEN I click on the GitHub username<br>
THEN that GitHub profile opens in a new tab<br>
WHEN I start the application<br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br>
WHEN I enter the team manager’s name, employee ID, email address, and office number<br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br>
WHEN I select the engineer option<br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu<br>
WHEN I select the intern option<br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br>
WHEN I decide to finish building my team<br>
THEN I exit the application, and the HTML is generated<br>