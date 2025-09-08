export default [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using a the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  {
    id: 'q8',
    text: 'What is the purpose of props in React?',
    answers: [
      'To pass data from parent components to child components.',
      'To store local state inside a component.',
      'To handle errors in the application.',
      'To style components with CSS classes.',
    ],
  },
  {
    id: 'q9',
    text: 'What does the useEffect hook do?',
    answers: [
      'It lets you perform side effects such as fetching data or updating the DOM.',
      'It directly manipulates component props.',
      'It is used only for handling form submissions.',
      'It replaces the need for useState in components.',
    ],
  },
  {
    id: 'q10',
    text: 'Which attribute is mandatory when rendering lists in React?',
    answers: [
      'The key attribute.',
      'The id attribute.',
      'The name attribute.',
      'The value attribute.',
    ],
  },
  {
    id: 'q11',
    text: 'What is ReactDOM used for?',
    answers: [
      'It provides DOM-specific methods to render React components.',
      'It creates new React components.',
      'It is used for managing global state.',
      'It is only used for styling React apps.',
    ],
  },
  {
    id: 'q12',
    text: 'What does Virtual DOM in React mean?',
    answers: [
      'A lightweight copy of the real DOM that React uses for efficient updates.',
      'A physical DOM replacement inside the browser.',
      'A separate HTML page for rendering React components.',
      'A server-only rendering technique for React.',
    ],
  },
  {
    id: 'q13',
    text: 'What is the default behavior of forms in React?',
    answers: [
      'They trigger a browser reload on submit unless prevented.',
      'They automatically prevent the default behavior.',
      'They store values directly in state without setup.',
      'They can only work with controlled components.',
    ],
  },
  {
    id: 'q14',
    text: 'What is a controlled component in React?',
    answers: [
      'An input form element whose value is controlled by React state.',
      'An input field that manages its own state.',
      'A React component with lifecycle methods only.',
      'A component that renders conditionally.',
    ],
  },
  {
    id: 'q15',
    text: 'What does React.Fragment let you do?',
    answers: [
      'Group multiple elements without adding extra nodes to the DOM.',
      'Create a new React component.',
      'Pass props between parent and child components.',
      'Replace useState in functional components.',
    ],
  },
  {
    id: 'q16',
    text: 'What is the difference between state and props?',
    answers: [
      'State is managed inside the component, props are passed from outside.',
      'Props can change within a component, state cannot.',
      'Both are identical in React.',
      'Props store local data, state stores global data.',
    ],
  },
  {
    id: 'q17',
    text: 'Which command is used to create a new React app?',
    answers: [
      'npx create-react-app my-app',
      'npm start react-app',
      'npm install react-app',
      'react new my-app',
    ],
  },
  {
    id: 'q18',
    text: 'What is the purpose of React Router?',
    answers: [
      'To handle navigation and routing in a single-page React app.',
      'To fetch data from APIs.',
      'To manage component state globally.',
      'To style React components.',
    ],
  },
  {
    id: 'q19',
    text: 'What is the main advantage of using keys in lists?',
    answers: [
      'They help React identify which items have changed, added, or removed.',
      'They improve styling of list items.',
      'They allow props to be passed automatically.',
      'They make lists immutable.',
    ],
  },
  {
    id: 'q20',
    text: 'What happens when you call setState in React?',
    answers: [
      'The component re-renders with the new state values.',
      'The entire application reloads.',
      'Props are updated automatically.',
      'The DOM is replaced with a new instance.',
    ],
  },
];
