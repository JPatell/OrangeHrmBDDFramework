Feature: Test Tagged Hooks 

@First 
Scenario Outline: Orange HRM Login Test Scenario

Given user is already on Login Page
When title of login page is OrangeHRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page 
 
	
	Examples:
	| username | password | firstname | lastname | email       |
	| Admin  | admin123   | Tom 	  | Peter    | tp@abc.com  |
	| Admin  | admin123   | David 	  | Dsouza   | dd@abs.com  |	
			
@Second 
	Scenario Outline: This is Second test
	
Given user is already on Login Page
When title of login page is OrangeHRM
Then user enters "<username>" and "<password>"

Then user clicks on login button
Then user is on home page
Then user moves to candidates page
Then user moves to new candidate page
Then user enters contact details "<firstname>" and "<lastname>" and "<email>"


Examples:
	| username | password | firstname | lastname | email       |
	| Admin  | admin123   | Tom 	  | Peter    | tp@abc.com  |
	| Admin  | admin123   | David 	  | Dsouza   | dd@abs.com  |	
			