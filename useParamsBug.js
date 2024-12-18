In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This leads to `undefined` values for the parameters.

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams();
  // params will be undefined here if not within a route
  return <div>...</div>;
}
```