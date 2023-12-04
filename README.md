
### Peer Supply Software Engineer Coding Assessment
This coding assessment is intended to be no longer than 90 minutes long. Please ensure you do not go beyond the allotted 90 minutes. The assessment is a working todo application, but it has at least 7 bugs in the code. In the allotted time, the goal is for you to find the bugs, fix them, and add tests for them to the best of your ability so that the code meets the expected functionality described below. For anything you aren't able to complete in the allotted time but have ideas for how you would complete, please share those details in your submission.

Submissions should be sent following the instructions sent via email. Best of luck, and thank you for taking the time.

## Setup Instructions:

### Install Dependencies:

Navigate to the project folder in the terminal.
Run npm install in the root folder and the client folder to install the required dependencies.


#### Start:

In the root folder, run npm start to start the front-end and backend. You should be taken to a chrome window at the port on which the front-end is running.


### Front-end test:
`cd client && npm run test`

### Back-end test:
`cd server && npm run test`

### Expected functionality
The provided Todo app is a basic implementation with the following features:

#### How Long Have I Been on the Page
Display how many seconds I have been using the app


#### View Todos:
The app initially displays a list of todos retrieved from the server.

#### Add Todo:
Users can add new todos by typing in the input field at the bottom of the app and pressing "Enter."

#### Toggle Todo Completion:
Users can click on a todo to toggle its completion status (line-through text for completed todos).

#### Server Communication:
The app communicates with an Express server to fetch and update todo data.

#### Expected Behavior:
Initial State:

The app should display the initial list of todos fetched from the server.

#### Adding a Todo:

When a user adds a new todo, it should be sent to the server, and the app's state should update to include the new todo.

#### Toggling Todo Completion:
Clicking on a todo should send a request to the server to toggle its completion status. The app's state should update accordingly.


#### General Flow:
Start the app, and the list of todos should be displayed.
Add a new todo using the input field.
Toggle the completion status of existing todos by clicking on them.
Verify that the todo list updates correctly after adding a new todo or toggling completion status.