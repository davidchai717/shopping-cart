# Shopping Cart

Database-less shopping cart, built on top of React and Express (with some help from local storage)

## Getting started

1. _npm install_ to install all dependencies
2. _npm start_ to build the application and initiate the Express server (accessed via localhost:3000)

In addition, _npm run dev_ executes a dev environment with hot loading available, and _npm test_ starts the test script.

## Design decisions/Areas for improvement

- The cart data is cached into the local storage in order to persist it.
- For state management, I went with the Context API and useState hook combination as there are only very few state data that need to be shared. If the UI expects more data to be sparsed throughout components, I would look to introduce the Flux pattern via either useReducer or Redux (likely the latter as almost all the actions are async, for which Thunk or Saga would be of great help).
- I would've liked to further optimize the way total amount is calculated on the backend. Instead of checking the cart content and combining the prices every time the API is executed, I want to cache the total in each cart and have it updated whenever a new item gets added - this way the total is there before user even inquires it, saving processing time.
- For a more enhanced dev environment, I would also consider dockerizing the Node environment in order to provide consistency among multiple developers.
