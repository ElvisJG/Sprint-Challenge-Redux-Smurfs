1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

--.map, .filter, .concat

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-- Actions in redux are action types and data associated with those actions.

-- reducer holds the state, imports actions, and sets cases for those actions to be dispatched.

-- The store is everything that changes within the application, and it is immutable.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

-- Application state is immutable and can only be modified by dispatching actions, the component state is is mutable and can be changed.

4.  What is middleware?

-- Middleware is an extension point for redux allowing you to intercept a process and run a function. It intercepts actions BEFORE they flow through to the reducers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-- redux-thunk is a middleware that allows you to make asynchronous API calls from action creators.

6.  Which `react-redux` method links up our `components` with our `redux store`?

-- Provider
