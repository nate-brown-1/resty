LAB 27 BELOW THIS LINE
----------------------

LAB - useState() Hook
RESTy Phase 2: Retrieving User Input and Managing State.

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Continue working in your ‘resty’ repository, extending your previous work in a new branch called ‘state’.

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 2 Requirements
In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components. In order to properly manage state with the useState hook, we will now convert <App /> to a functional component.

The following user stories detail the major functionality for this phase of the project.

As a user, I want to enter the REST Method and URL to an API.
As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.
Application Flow:

User enters an API URL.
Chooses a REST Method.
Clicks the “Go” button.
Application fetches data from the URL given, with the method specified.
Displays the response headers and results separately.
Both headers and results should be “pretty printed” JSON.
One possible design/layout. Please use your judgement and taste in styling your version of this application.

Resty

Technical Requirements / Note
Extend your React Application so that your functional components are able to manage their own state variables using the useState() Hook.
NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data.

Refactor any components using this.setState() to implement the useState() react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.
Suggested Component Hierarchy and Application Architecture:

index.js - Entry Point.
<App /> - Container.
Holds application state: The Request (from the form) and the Response (from the API).
Hook that can update state.
Renders 2 Child Components.
<Form />
Expects a function to be sent to it as a prop.
Renders a URL entry form.
A selection of REST methods to choose from (“get” should be the default).
The active selection should be displayed/styled differently than the others.
Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
On submit:
Send the Form entries back to the <App /> using the method sent down in props.
Form will run the API request.
Toggle the “loading” status before and after the request.
<Results />
Conditionally renders “Loading” or the data depending on the status of the request.
Renders the data as “pretty” JSON.
Proposed File Structure
In this proposal:

Utilize Airbnb React/JSX Style Guide conventions.
Unit tests are placed in the component directory (testing one file only).
Integration tests are placed in the __tests__ directory (testing more than one file).
├── .github
│   ├── workflows
│   │   └── node.yml
├── public
├── src
│   ├── __tests__
│   │   │   └── App.test.jsx (integration test)
│   ├── Components
│   │   ├── Footer
│   │   │   ├── Footer.scss
│   │   │   ├── Footer.test.jsx (unit test)
│   │   │   └── index.jsx
│   │   ├── Form
│   │   │   ├── Form.scss
│   │   │   ├── Form.test.jsx 
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.scss
│   │   │   ├── Header.test.jsx 
│   │   │   └── index.jsx
│   │   └── Results
│   │       ├── index.jsx
│   │       ├── Results.scss
│   │       └── Results.test.jsx
│   ├── App.jsx
│   ├── App.scss
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
Tests
Utilize the React Testing Library framework installed with CRA.
Assert that upon form submission the resulting data will be rendered in the output area.
Install the GitHub action that will auto-run your tests on all check-ins.
Stretch Goals
Connect the App component to an API and make an actual call (focusing on GET) to the URL requested in the form.



LAB 26 BELOW THIS LINE
----------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# resty
