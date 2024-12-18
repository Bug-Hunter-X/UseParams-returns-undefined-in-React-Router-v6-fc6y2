# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6: receiving `undefined` values for route parameters.

The problem arises when `useParams` is used outside of a component rendered within a route definition using `<Route path='...'>`.

The solution shows the correct usage of `useParams` within a component nested under a route.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the incorrect usage and the correct implementation.