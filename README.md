Quiz Generator
The application should be developed using TDD and instructions should be provided on running the tests and running the application in the browser.
Points will be granted for:
•	Clarity, design and structure of code
•	Testing
•	UI Styling
•	Overall delivery (readme, steps needed to test & run the application)
Write a quiz generator single page application using Angular 5 that allows the users to create and take a quiz. The user should be able to add an unlimited number of questions and answers. The application should have a menu with two items (Add Questions, Take Quiz)
A) The Add Questions page should have two text boxes (one for question, one for answer) and a button for submitting the question.
B) Take Quiz page should display a random question, and should have a show answer button, and a next question button.

Acceptance Criteria
As a quiz creator
Given I navigate to the application url and click on the Add Questions menu item
Then I should be taken to the Add Questions page

As a quiz creator
Given I am on the Add Questions page
When I type a question into the question and answer text boxes
And I click on add question button
Then the question and answer are stored and I am shown the 'Question successfully added' message
And the question text box is cleared
And the answer text box is cleared

As a quiz taker
Given that I navigate to the application url and click on the Take Quiz menu item
Then I should be taken to the Take Quiz page
And a random question should be displayed
And the 'show answer' button should be displayed
And the 'show next question' button should be displayed

As a quiz taker
Given I am on the Take Quiz page
When I click on the 'show answer' button
Then the answer should be displayed

As a quiz taker
Given I am on the Take Quiz page
When I click on the 'show next question' button
Then another question should be shown at random

****************************************************************
Open the folder in Visual Studio Code, run "npm install restore" from the integrated terminal and then "ng serve --open".
